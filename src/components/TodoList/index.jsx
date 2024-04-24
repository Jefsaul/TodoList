import {
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import TodoContainer from "../TodoContainer";

const TodoList = () => { 
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <Button variant="contained">Add Task</Button>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <FormControl
            sx={{ minWidth: "10vw", textAlign: "left" }}
            size="small"
          >
            <Select displayEmpty>
              <MenuItem selected value="All">
                All
              </MenuItem>
              <MenuItem value="Uncompleted">Uncompleted</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12} style={{ paddingTop: 25 }}>
          <TodoContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TodoList;
