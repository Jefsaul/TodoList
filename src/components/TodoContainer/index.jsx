import { Container, Typography } from "@mui/material";
import React from "react";
import TodoItem from "../TodoItem";
import "./style.css";

const TodoContainer = ({ data }) => {
  return (
    <Container className="container">
      {data.length > 0 ? (
        data.map((item) => <TodoItem key={item.id_task} item={item} />)
      ) : (
        <div className="noFoundContainer">
          <Typography variant="subtitle1" className="noFound">
            No Todo Found
          </Typography>
        </div>
      )}
    </Container>
  );
};

export default TodoContainer;
