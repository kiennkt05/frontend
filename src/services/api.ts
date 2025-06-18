import axios from "axios";
import {
  TaskYAML,
  ModelResponse,
  GeneratedUI,
  ExampleCase,
} from "../types/api";

const API_BASE_URL = "http://localhost:8000";

export const api = {
  loadTask: async (
    taskPath: string
  ): Promise<{ success: boolean; ui: GeneratedUI }> => {
    const response = await axios.post(`${API_BASE_URL}/load-task`, {
      task_path: taskPath,
    });
    return response.data;
  },

  processInput: async (file: File): Promise<ModelResponse> => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(
      `${API_BASE_URL}/process-input`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },

  getExampleCases: async (): Promise<{
    success: boolean;
    examples: ExampleCase[];
  }> => {
    const response = await axios.get(`${API_BASE_URL}/example-cases`);
    return response.data;
  },

  getTaskInfo: async (): Promise<{
    type: string;
    description: string;
    input_format: any;
    output_format: any;
  }> => {
    const response = await axios.get(`${API_BASE_URL}/task-info`);
    return response.data;
  },
};
