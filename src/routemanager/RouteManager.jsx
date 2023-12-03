import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../controllers/Layout";
import Charts from "../routes/Charts";
import Analysis from "../routes/Inputs";

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Analysis />} />
          <Route path="charts" element={<Charts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteManager;
