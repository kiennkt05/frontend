import React from "react";
import { Paper, Typography, LinearProgress, Box } from "@mui/material";

interface Prediction {
  category: string;
  confidence: number;
}

interface Props {
  results?: Prediction[];
}

const ClassificationResults: React.FC<Props> = ({ results }) => {
  if (!results || results.length === 0) return null;

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Classification Results
      </Typography>
      {results.map((result, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body1">{result.category}</Typography>
            <Typography variant="body2" color="text.secondary">
              {(result.confidence * 100).toFixed(2)}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={result.confidence * 100}
            sx={{ height: 8, borderRadius: 4 }}
          />
        </Box>
      ))}
    </Paper>
  );
};

export default ClassificationResults;
