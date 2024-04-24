import { Typography } from "@mui/material";
import React from "react";
import TodoList from "../components/TodoList";

const IndexPage = () => {
  return (
    <div style={{width: '100vw'}}>
      <section style={{paddingBlock: 40}}>
        <Typography variant="h2" fontWeight="bold" color='grey'>
          TODO LIST
        </Typography>
      </section>
      <section>
        <TodoList />
      </section>
    </div>
  );
};

export default IndexPage;
