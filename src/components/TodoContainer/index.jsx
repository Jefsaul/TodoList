import { Container } from "@mui/material";
import React from "react";
import TodoItem from "../TodoItem";

const TodoContainer = () => {
  return (
    <Container style={{ backgroundColor: "#ECECF5" }}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </Container>
  );
};

export default TodoContainer;
