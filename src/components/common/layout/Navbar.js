import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const { Header } = Layout;
const rightStyle = { position: "absolute", top: 0, right: 20 };
const Navbar = () => {
  const [size, setSize] = useState("large");

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/">About</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/">Services</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/">test</Link>
        </Menu.Item>
      </Menu>
      <Menu mode="horizontal" style={rightStyle}>
        {/* <Menu.Item key="2">
          <Link to="/settings">Login</Link>
        </Menu.Item> */}
        {/* <Link to="/">Login</Link> */}
        <Link to="/">
          {" "}
          <Button
            type="text"
            color="red"
            // shape="round"
            style={{
              background: "red",
              borderRadius: "5px",
              color: "white",
              borderBlockColor: "red",
            }}
          >
            SignUp
          </Button>
        </Link>
      </Menu>
    </>
  );
};

export default Navbar;
