import React from "react";
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { ExampleCase } from "../types/api";

interface Props {
  examples?: ExampleCase[];
}

const ExampleCases: React.FC<Props> = ({ examples }) => {
  if (!examples || examples.length === 0) return null;

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Example Cases
      </Typography>
      <Grid container spacing={2}>
        {examples.map((example, index) => (
          <Grid
            key={index}
            sx={{ width: { xs: "100%", sm: "50%", md: "33.33%" } }}
          >
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={example.path}
                alt={example.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="subtitle1" noWrap>
                  {example.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ExampleCases;
