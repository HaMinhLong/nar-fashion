import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

const HeaderPage = () => {
  return (
    <Header id="components-layout-demo-top">
      <img
        className="logo"
        src="https://image.flaticon.com/icons/png/512/685/685680.png"
        alt=""
      />
      <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        {/* <Menu.Item key="2">
          <Link to="/cv">Quản lý hồ sơ</Link>
        </Menu.Item> */}
      </Menu>
    </Header>
  );
};

export default HeaderPage;
