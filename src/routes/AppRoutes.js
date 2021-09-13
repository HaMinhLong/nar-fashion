import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Dashboard/Home";
import Cv from "../pages/CvDetails/Cv";

const AppRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/cv" component={Cv} />
    </>
  );
};

export default AppRoutes;
