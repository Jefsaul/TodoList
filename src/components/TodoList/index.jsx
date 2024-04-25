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
import useModal from "../../hooks/useModal";
import ModalAdd from "../Modals/ModalAdd";

const TodoList = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={6} style={{ textAlign: "left" }}>
            <Button onClick={() => openModal()} variant="contained">Add Task</Button>
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
                <MenuItem value="Incomplete">Incomplete</MenuItem>
                <MenuItem value="Complete">Complete</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} style={{ paddingTop: 25 }}>
            <TodoContainer />
          </Grid>
        </Grid>
      </Container>
      <ModalAdd open={isOpen} handleClose={closeModal}/>
    </>
  );
};

export default TodoList;
