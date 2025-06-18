export interface TaskDescription {
  type: string;
  description: string;
  input: string;
  output: string;
  visualize: {
    visualize: string;
    features: string[];
    list_display: string[];
    input_function: string[];
  };
}

export interface ModelInformation {
  api_url: string;
  name: string;
  input_format: {
    type: string;
    format: string[];
    max_size: string;
  };
  output_format: {
    type: string;
    structure: any;
    example: any;
  };
  sample_code?: string;
}

export interface DatasetInformation {
  data_path: string;
  additional_info?: {
    categories?: string[];
    total_examples?: number;
  };
}

export interface TaskYAML {
  task_description: TaskDescription;
  model_information: ModelInformation;
  dataset_information: DatasetInformation;
}

export interface ModelResponse {
  success: boolean;
  result: any;
  error?: string;
}

export interface UIComponent {
  type: string;
  props: {
    [key: string]: any;
  };
  children?: UIComponent[];
}

export interface GeneratedUI {
  components: UIComponent[];
  layout: {
    type: string;
    style: {
      [key: string]: any;
    };
    grid: {
      columns: number;
      gap: string;
    };
  };
}

export interface ExampleCase {
  name: string;
  path: string;
}
