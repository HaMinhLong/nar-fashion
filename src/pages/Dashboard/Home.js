import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import HeaderContent from "../../layouts/HeaderContent";

const List = () => {
  return (
    <HeaderContent title="Dashboard">
      <Card
        bodyStyle={{
          textAlign: "left",
          height: "100px",
          padding: "0 24px",
        }}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 5px",
          background: "#FF5370",
          color: "white",
        }}
        title="Thông tin hồ sơ ứng viên"
        extra={<Link to="/cv">Chi tiết</Link>}
        style={{ width: 500 }}
        bordered={false}
      >
        <p>Tên ứng viên: Hà Minh Long</p>
        <p>Email: haminhlong3@gmail.com</p>
        <p>Vị trí: Thực tập sinh</p>
      </Card>
    </HeaderContent>
  );
};

export default List;
