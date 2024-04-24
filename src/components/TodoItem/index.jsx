import { Delete, Edit } from "@mui/icons-material";
import { Button, Card, Checkbox, Grid, Typography } from "@mui/material";
import React from "react";

const TodoItem = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card style={{ marginBlock: 5 }}>
          <div style={{ paddingBlock: 15 }}>
            <Grid container alignItems="center">
              <Grid item xs={1}>
                <Checkbox defaultChecked size="large" />
              </Grid>
              <Grid item xs={8} style={{ textAlign: "left" }}>
                <Typography>Complete the vue js course udemy</Typography>
                <Typography>2024</Typography>
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" size="small" color="inherit">
                  <Delete fontSize="small" />
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="inherit"
                  style={{ marginLeft: 10 }}
                >
                  <Edit fontSize="small" />
                </Button>
              </Grid>
            </Grid>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TodoItem;
