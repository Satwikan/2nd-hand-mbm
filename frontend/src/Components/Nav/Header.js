import React, { useState } from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, LogoutOutlined, SettingOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'antd';
import "./Header.css";


function Header() {
  const { SubMenu } = Menu;
  const history = useHistory();
  const { user } = useSelector(state => ({ ...state }));

  const dispatch = useDispatch();
  const [current, setcurrent] = useState("home");
  const logout = (e) => {
    firebase.auth().signOut();
    dispatch({
      type: "LOG_OUT",
      payload: null,
    })
    setcurrent(e.key);
    history.push('/login');

  }

  const handleClick = (e) => {

    setcurrent(e.key);
  }
  return (
    <div style={{ position: "fixed", width: "100%", "z-index": "9", color: "red" }}  >
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{ "background-color": "#12232E" }}  >
        <Menu.Item key="home" icon={<AppstoreOutlined />} style={{ color: "red" }} >
          <Link to="/">
            {" "}
            <strong>
              {" "}
              <i class="fas fa-shopping-cart"></i> 2nd-hand MBM{" "}
            </strong>{" "}
          </Link>
        </Menu.Item>



        <button className='float-right' onClick={() => history.push("/about")} id="sell-button">
          <i class="fa fa-plus"></i> About Us

        </button>

        <button className='float-right' onClick={() => history.push("/Sell")} id="sell-button">
          <i class="fa fa-plus"></i> SELL
        </button>

        {
          !user && (
            <Menu.Item key="Login" className="float-right" icon={<UserOutlined />} style={{ color: "red" }} >
              <Link to="/login">
                Login
          </Link>
            </Menu.Item>
          )
        }

        {
          !user && (
            <Menu.Item key="Register" icon={<UserAddOutlined />} className="float-right" style={{ color: "red" }} >
              <Link to="/register">
                Register
          </Link>
            </Menu.Item>
          )
        }


        {user && (
          <SubMenu key="SubMenu" icon={<SettingOutlined />} className="float-right" title={user.email.split('@')[0]} style={{ color: "red" }} >
            {
              user && user.role === "subscriber" && (
                <Menu.Item key="setting:1">
                  <Link to='/'>
                    Dashboard
              </Link>
                </Menu.Item>
              )
            }

            {
              user && user.role === "admin" && (
                <Menu.Item key="setting:1">
                  <Link to='/admin/dashboard'>
                    Dashboard
              </Link>
                </Menu.Item>
              )
            }



            <Menu.Item onClick={logout} icon={<LogoutOutlined />} key="setting:3">Logout</Menu.Item>


          </SubMenu>
        )}

      </Menu>
    </div>
  )
}

export default Header