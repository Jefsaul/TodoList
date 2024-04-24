import React from "react";
import { Route, Routes } from "react-router-dom";

const IndexPage = React.lazy(() => import("../pages/IndexPage"));

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>
  );
};

export default AppRouter;
