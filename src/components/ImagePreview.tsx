import React from "react";
import { Box, Paper } from "@mui/material";

interface Props {
  imageUrl?: string;
}

const ImagePreview: React.FC<Props> = ({ imageUrl }) => {
  if (!imageUrl) return null;

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Box
        component="img"
        src={imageUrl}
        alt="Preview"
        sx={{
          maxWidth: "100%",
          maxHeight: "400px",
          display: "block",
          margin: "0 auto",
        }}
      />
    </Paper>
  );
};

export default ImagePreview;
