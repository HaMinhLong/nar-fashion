require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.less";
import "./static/css/styles.less";

const appElement = document.getElementById("app");

ReactDOM.render(<App />, appElement);
