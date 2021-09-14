import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import HeaderPage from "./layouts/HeaderPage";
import AppRoutes from "./routes/AppRoutes";
const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <HeaderPage />
        <Content>
          <AppRoutes />
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
