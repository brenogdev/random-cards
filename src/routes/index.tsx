import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Intro } from "../pages";

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home/:name" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
