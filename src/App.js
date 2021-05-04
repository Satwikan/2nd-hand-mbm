import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Header from "./Header"; //Include Heder
import Footer from "./Footer"; //Include Footer

import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import Banner from "./Banner";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <br />
        <Banner />
        <br />
        <br />
        <br />

        <Container>
          <Row>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </Container>

        <br />
        <Footer />
      </div>
    );
  }
}
export default App;