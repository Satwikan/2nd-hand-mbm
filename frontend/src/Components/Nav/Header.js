import React, { useState } from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, LogoutOutlined, SettingOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase';
import {useDispatch, useSelector} from 'react-redux';

import {Button} from 'antd';


function Header() {
  const { SubMenu } = Menu;
  const history = useHistory();
  const {user} = useSelector(state =>({ ...state}));
  
    const dispatch = useDispatch();
    const [current, setcurrent] = useState("home");
    const logout = (e) => {
      firebase.auth().signOut();
      dispatch({
        type: "LOG_OUT",
        payload:null,
      })
      setcurrent(e.key);
      history.push('/login');
      
    }
    

    
    const handleClick = (e) => {
        
        setcurrent(e.key);
    }
    return (
        <div>
             <Menu  onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">
        {" "}
        <strong>
          {" "}
          <i class="fas fa-shopping-cart"></i> 2nd-hand MBM{" "}
        </strong>{" "}
          </Link>
        </Menu.Item>
        <Button type='primary' className='ml-5' onClick={() => history.push("/Sell")} id="sell-button">
          <i className="fa fa-plus"></i> SELL
        </Button>
        {
          !user && (
            <Menu.Item key="Login" className="float-right" icon={<UserOutlined />}>
          <Link to="/login">
          Login
          </Link>
        </Menu.Item>
          )
        }
        {
          !user && (
            <Menu.Item key="Register"  icon={<UserAddOutlined />} className="float-right">
        <Link to="/register">
          Register
          </Link>
        </Menu.Item>
          )
        }
        
        {user && (
          <SubMenu key="SubMenu" icon={<SettingOutlined />} className="float-right" title={user.email.split('@')[0]}>
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
            
            
            <Menu.Item onClick={logout} icon={<LogoutOutlined/>} key="setting:3">Logout</Menu.Item>
          
         
        </SubMenu>
        )}
        
      </Menu>
        </div>
    )
}

export default Header