import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import HeaderContent from "../../layouts/HeaderContent";

const List = () => {
  return (
    <HeaderContent title="Dashboard">
      <Card
        title="Thông tin hồ sơ ứng viên"
        extra={<Link to="/cv">Chi tiết</Link>}
        style={{ width: 500 }}
      >
        <p>Tên ứng viên: Hà Minh Long</p>
        <p>Email: haminhlong3@gmail.com</p>
        <p>Vị trí: Thực tập sinh</p>
      </Card>
    </HeaderContent>
  );
};

export default List;
