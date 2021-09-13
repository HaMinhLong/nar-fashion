import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;
import HeaderPage from "./layouts/HeaderPage";
import FooterPage from "./layouts/FooterPage";
import AppRoutes from "./routes/AppRoutes";
import HeaderContent from "./layouts/HeaderContent";

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <HeaderPage />
        <Content>
          <AppRoutes />
        </Content>
        {/* <FooterPage /> */}
      </Layout>
    </Router>
  );
};

export default App;
