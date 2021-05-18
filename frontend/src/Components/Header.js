import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import history from "../history";
import "./Header.css";

const Header = () => {
  const headColorLight = { color: "#4DA8DA" };
  const headColorDark = { color: "#12232E" };

  return (
    <Navbar expand="lg" id="headBar">
      <Navbar.Brand onClick={() => history.push("/")} style={headColorLight}>
        {" "}
        <strong>
          {" "}
          <i class="fas fa-shopping-cart"></i> 2nd-hand MBM{" "}
        </strong>{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Find some products..."
              className="search-bar mx-auto"
              style={{ width: "500px" }}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Nav>

        <button onClick={() => history.push("/Sell")} id="sell-button">
          <i class="fa fa-plus"></i> SELL
        </button>
        <NavDropdown title="My Profile" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1" style={headColorDark}>
            My Ads
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1" style={headColorDark}>
            Favorites
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" style={headColorDark}>
            Profile
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            href="#action/3.4"
            className="logout-button"
            style={{ color: "red" }}
          >
            <b>Logout</b>
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
