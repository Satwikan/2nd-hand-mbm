import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, NavDropdown } from "react-bootstrap";
import history from "../history";
import "./Header.css";

const Header = () => {
  const headColorLight = { color: "#4DA8DA" };
  const headColorDark = { color: "MidnightBlue" };

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
            {/* <FormControl
              type="text"
              placeholder="Find some products..."
              className="search-bar mx-auto search__input"
              style={{ width: "500px" }}
            /> */}
            <div class="col-rt-3 equal-height">
              <div class="sb-example-3">
                <div class="search__container">
                  <input
                    class="search__input"
                    type="text"
                    placeholder="Find some products..."
                  />
                </div>
              </div>
            </div>
          </Form>
        </Nav>

        <button onClick={() => history.push("/Sell")} id="sell-button">
          <i class="fa fa-plus"></i> SELL
        </button>

        <NavDropdown title="My Profile" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.2" style={headColorDark}>
            Profile &emsp; <i class="fas fa-user-circle"></i>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1" style={headColorDark}>
            My Ads &emsp; <i class="fas fa-ad"></i>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1" style={headColorDark}>
            Favorites &ensp; <i class="far fa-heart"></i>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            href="#action/3.4"
            className="logout-button"
            style={{ color: "red" }}
          >
            <b>Logout</b> &emsp; <i class="fas fa-sign-out-alt"></i>
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
