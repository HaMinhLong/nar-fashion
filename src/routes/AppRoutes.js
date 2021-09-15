import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Dashboard/Home";
import CurriculumVitae from "../pages/CurriculumVitae/CurriculumVitae";

const AppRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/curriculum-vitae" component={CurriculumVitae} />
    </>
  );
};

export default AppRoutes;
