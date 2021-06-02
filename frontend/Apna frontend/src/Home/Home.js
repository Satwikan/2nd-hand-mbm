import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "../Components/Card";
import Banner from "../Components/Banner";

function Home() {
  return (
    <div>
      <Banner />
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
      <Container className="w-65 p-3">
        <div className="App">
          <br />
        </div>
      </Container>
    </div>
  );
}

export default Home;
