import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import { Button, Card, Checkbox, Grid, Typography } from "@mui/material";
import useModal from "../../hooks/useModal";
import ModalUpdate from "../Modals/ModalUpdate";
import { showError, showLoading, showSuccess } from "../Alerts";
import Swal from "sweetalert2";
import { deleteTask } from "../../APIs/apiFunctions";
import "./item-style.css";

const TodoItem = ({ item }) => {
  const { isOpen, openModal, modalData, closeModal } = useModal();
  const textStyle = {
    textDecoration: item.task_status === "Complete" ? "line-through" : "none",
    color: item.task_status === "Complete" ? "gray" : "inherit",
  };

  const handlePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        showLoading();

        const delTask = await deleteTask(id);
        if (delTask) {
          Swal.close;
          showSuccess("Succesful", "Task deleated successfully");
        } else {
          showError('Error', 'An error occurred while deleting the record')
        }
      }
    });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Card style={{ marginBlock: 5 }}>
            <div style={{ paddingBlock: 15 }}>
              <Grid container alignItems="center">
                <Grid item md={1} xs={2}>
                  <Checkbox
                    checked={item.task_status == "Incomplete" ? false : true}
                    onClick={(e) => e.preventDefault()}
                    style={{ pointerEvents: "none" }}
                    size="large"
                  />
                </Grid>
                <Grid item md={8} xs={7} style={{ textAlign: "left" }}>
                  <Typography style={textStyle}>{item.title_task}</Typography>
                  <Typography color="gray">{item.create_timestamp}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    onClick={() => handlePost(item.id_task)}
                    variant="contained"
                    size="small"
                    color="inherit"
                  >
                    <Delete fontSize="small" />
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="inherit"
                    className="btn-edit"
                    onClick={() => openModal(item)}
                  >
                    <Edit fontSize="small" />
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
      </Grid>
      <ModalUpdate open={isOpen} handleClose={closeModal} data={modalData} />
    </>
  );
};

export default TodoItem;
