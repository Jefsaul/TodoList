import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { style } from "../styles/ModalStyle";
import { showLoading, showSuccess } from "../../Alerts";
import { updateTask } from "../../../APIs/apiFunctions";
import Swal from "sweetalert2";

const ModalUpdate = ({ open, handleClose, data }) => {
  const [inputState, setInputState] = useState({
    item_id: "",
    title: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (data) {
      const { id_task, title_task, task_status } = data;
      setInputState({
        item_id: id_task,
        title: title_task,
        status: task_status || "Incomplete",
      });
    }
  }, [data]);

  const handlePost = async (e) => {
    showLoading();

    const { item_id, title, status } = inputState;

    try {
      const upTask = await updateTask(item_id, title, status);

      if (upTask) {
        Swal.close;
        showSuccess("Succesful", "Task updated successfully");
      } else {
        Swal.close;
        showError('Error', 'An error occurred while updating the record')
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal open={open} aria-labelledby="modal-modal-title">
      <Box sx={style}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Typography id="modal-modal-title" variant="h6" fontWeight="bold">
              Update Task
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Button
              onClick={handleClose}
              variant="text"
              color="inherit"
              size="small"
            >
              <Close fontSize="large" />
            </Button>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: 20 }}>
            <TextField
              name="title"
              value={inputState.title}
              onChange={handleInputChange}
              label="Title"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} style={{ paddingTop: 20 }}>
            <TextField
              name="status"
              value={inputState.status}
              onChange={handleInputChange}
              label="Status"
              variant="outlined"
              select
              style={{ width: "100%" }}
            >
              <MenuItem value="Incomplete">Incomplete</MenuItem>
              <MenuItem value="Complete">Complete</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: 25 }}>
            <Button
              onClick={handlePost}
              style={{ marginRight: 15 }}
              variant="contained"
            >
              Update Task
            </Button>
            <Button onClick={handleClose} variant="contained" color="inherit">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalUpdate;
