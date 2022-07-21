import { CssBaseline } from "@mui/material";
import React from "react";
import { AppRoutes } from "./routes";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <CssBaseline />
      <AppRoutes />
    </>
  );
};
