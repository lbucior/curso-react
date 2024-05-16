import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundErrorPage from "../pages/errors/NotFoundErrorPage";

const ErrorRouter = () => {
  return (
    <Routes>
      <Route path="not-found" element={<NotFoundErrorPage />} />

      <Route index element={<Navigate to="not-found" />} />
    </Routes>
  );
};

export default ErrorRouter;
