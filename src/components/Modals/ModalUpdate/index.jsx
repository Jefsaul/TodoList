import React from "react";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px solid #fff",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

const ModalUpdate = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
    >
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
              label="Title"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} style={{ paddingTop: 20 }}>
            <TextField
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
            <Button style={{ marginRight: 15 }} variant="contained">
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
