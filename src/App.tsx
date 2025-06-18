import React, { useState, useEffect } from "react";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { api } from "./services/api";
import GeneratedUI from "./components/GeneratedUI";
import { GeneratedUI as GeneratedUIType } from "./types/api";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [ui, setUi] = useState<GeneratedUIType | null>(null);
  const [modelResponse, setModelResponse] = useState<any>(null);
  const [exampleCases, setExampleCases] = useState<any[]>([]);

  useEffect(() => {
    // Load the example task
    const loadTask = async () => {
      try {
        const response = await api.loadTask(
          "../image_classification/task.yaml"
        );
        if (response.success) {
          setUi(response.ui);
        }
      } catch (error) {
        console.error("Error loading task:", error);
      }
    };

    const loadExampleCases = async () => {
      try {
        const response = await api.getExampleCases();
        if (response.success) {
          setExampleCases(response.examples);
        }
      } catch (error) {
        console.error("Error loading example cases:", error);
      }
    };

    loadTask();
    loadExampleCases();
  }, []);

  const handleFileUpload = async (file: File) => {
    try {
      const response = await api.processInput(file);
      if (response.success) {
        setModelResponse(response.result);
      }
    } catch (error) {
      console.error("Error processing file:", error);
    }
  };

  if (!ui) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <h1>Loading...</h1>
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GeneratedUI
        ui={ui}
        onFileUpload={handleFileUpload}
        modelResponse={modelResponse}
        exampleCases={exampleCases}
      />
    </ThemeProvider>
  );
}

export default App;
