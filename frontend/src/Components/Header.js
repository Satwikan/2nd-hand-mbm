import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import history from "../history";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={() => history.push('/')}>2nd-Hand-MBM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="search-bar mx-auto"
                style={{width: '500px'}}
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
          </Nav>

          <Button onClick={() => history.push('/Sell')} className='sell'>+ SELL</Button>
          <NavDropdown title="User-Name" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">My Ads</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" className="logout" style={{color:'red'}}>
              <b>Logout</b>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
