import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import TodoContainer from "../TodoContainer";
import useModal from "../../hooks/useModal";
import ModalAdd from "../Modals/ModalAdd";
import { getTasks } from "../../APIs/apiFunctions";

const TodoList = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("All");

  const getData = async () => {
    const data = await getTasks(status);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, [status]);

  return (
    <>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={6} style={{ textAlign: "left" }}>
            <Button onClick={() => openModal()} variant="contained">
              Add Task
            </Button>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <FormControl
              sx={{ minWidth: "10vw", textAlign: "left" }}
              size="small"
            >
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                displayEmpty
              >
                <MenuItem selected value="All">
                  All
                </MenuItem>
                <MenuItem value="Incomplete">Incomplete</MenuItem>
                <MenuItem value="Complete">Complete</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} style={{ paddingTop: 25 }}>
            <TodoContainer data={data}/>
          </Grid>
        </Grid>
      </Container>
      <ModalAdd open={isOpen} handleClose={closeModal} />
    </>
  );
};

export default TodoList;
