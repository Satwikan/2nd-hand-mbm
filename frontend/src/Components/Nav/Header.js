import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.png";

import { Button } from "antd";
import "./Header.css";

function Header() {
  const { SubMenu } = Menu;
  const history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();
  const [current, setcurrent] = useState("home");
  const logout = (e) => {
    firebase.auth().signOut();
    dispatch({
      type: "LOG_OUT",
      payload: null,
    });
    setcurrent(e.key);
    history.push("/login");
  };

  const handleClick = (e) => {
    setcurrent(e.key);
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        "z-index": "9",
        color: "#fff",
        "align-items": "center",
      }}
      className="main-container"
    >
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{ "background-color": "#12232E" }}
      >
        <Menu.Item key="home" style={{ color: "#4DA8DA" }}>
          <Link to="/">
            <img
              src="https://raw.githubusercontent.com/Satwikan/2nd-hand-mbm/main/frontend/public/logo.png"
              alt="2nd-HAND-MBM"
              id="logo"
            />
          </Link>
        </Menu.Item>

        
        {/* <button  class="btn btn-info">Info</button> */}
        <button
        type="button"
          className="ml-4 btn btn-info"
          onClick={() => history.push("/Sell")}
          id="sell-button"
        >
          <i class="fa fa-plus"></i> + SELL
        </button>

        {!user && (
          <Menu.Item
            key="Login"
            className="float-right"
            icon={<UserOutlined />}
          >
            <Link to="/login" style={{ color: "#4DA8DA" }}>
              Login
            </Link>
          </Menu.Item>
        )}

        {!user && (
          <Menu.Item
            key="Register"
            icon={<UserAddOutlined />}
            className="float-right"
          >
            <Link to="/register" style={{ color: "#4DA8DA" }}>
              Register
            </Link>
          </Menu.Item>
        )}

        {user && (
          <SubMenu
            key="SubMenu"
            icon={<SettingOutlined />}
            className="float-right"
            title={user.email.split("@")[0]}
            style={{ color: "#4DA8DA" }}
          >
            {user && user.role === "subscriber" && (
              <Menu.Item key="setting:1">
                <Link to="/" style={{ color: "#4DA8DA" }}>
                  Dashboard
                </Link>
              </Menu.Item>
            )}

            {user && user.role === "admin" && (
              <Menu.Item key="setting:1">
                <Link to="/admin/dashboard">Dashboard</Link>
              </Menu.Item>
            )}

            <Menu.Item>
            <button
          className="ml-5"
          onClick={() => history.push("/about")}
          id="about-button"
        >
          <i class="fa fa-plus"></i> About Us
        </button>
              
            </Menu.Item>

            <Menu.Item
              onClick={logout}
              icon={<LogoutOutlined />}
              key="setting:3"
              style={{ color: "red" }}
            >
              Logout
            </Menu.Item>
          </SubMenu>
        )}
      </Menu>
    </div>
  );
}

export default Header;
