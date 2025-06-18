import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import { UIComponent, GeneratedUI as GeneratedUIType } from "../types/api";
import FileUpload from "./FileUpload";
import ImagePreview from "./ImagePreview";
import ClassificationResults from "./ClassificationResults";
import TextOutput from "./TextOutput";
import ExampleCases from "./ExampleCases";

interface Props {
  ui: GeneratedUIType;
  onFileUpload: (file: File) => void;
  modelResponse?: any;
  exampleCases?: any[];
}

const GeneratedUI: React.FC<Props> = ({
  ui,
  onFileUpload,
  modelResponse,
  exampleCases,
}) => {
  const renderComponent = (component: UIComponent) => {
    switch (component.type) {
      case "header":
        return (
          <Typography variant="h4" component="h1" gutterBottom>
            {component.props.title}
          </Typography>
        );

      case "section":
        return (
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              {component.props.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {component.props.description}
            </Typography>
            {component.children?.map((child, index) => (
              <Box key={index}>{renderComponent(child)}</Box>
            ))}
          </Paper>
        );

      case "input":
        return (
          <FileUpload
            onFileUpload={onFileUpload}
            accept={component.props.accept}
          />
        );

      case "imagePreview":
        return <ImagePreview imageUrl={modelResponse?.imageUrl} />;

      case "classificationResults":
        return <ClassificationResults results={modelResponse?.predictions} />;

      case "textOutput":
        return <TextOutput text={modelResponse?.text} />;

      case "examples":
        return <ExampleCases examples={exampleCases} />;

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={ui.layout.style}>
        {ui.components.map((component, index) => (
          <Box key={index}>{renderComponent(component)}</Box>
        ))}
      </Box>
    </Container>
  );
};

export default GeneratedUI;
