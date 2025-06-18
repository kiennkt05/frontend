import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface Props {
  onFileUpload: (file: File) => void;
  accept?: string;
}

const FileUpload: React.FC<Props> = ({ onFileUpload, accept }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles[0]);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept ? { [accept]: [] } : undefined,
    multiple: false,
  });

  return (
    <Paper
      {...getRootProps()}
      sx={{
        p: 3,
        textAlign: "center",
        cursor: "pointer",
        bgcolor: isDragActive ? "action.hover" : "background.paper",
        border: "2px dashed",
        borderColor: isDragActive ? "primary.main" : "divider",
      }}
    >
      <input {...getInputProps()} />
      <CloudUploadIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
      <Typography variant="h6" gutterBottom>
        {isDragActive
          ? "Drop the file here"
          : "Drag and drop a file here, or click to select"}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {accept ? `Accepted file types: ${accept}` : "Any file type"}
      </Typography>
    </Paper>
  );
};

export default FileUpload;
