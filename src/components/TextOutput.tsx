import React from "react";
import { Paper, Typography } from "@mui/material";

interface Props {
  text?: string;
}

const TextOutput: React.FC<Props> = ({ text }) => {
  if (!text) return null;

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Generated Text
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
        {text}
      </Typography>
    </Paper>
  );
};

export default TextOutput;
