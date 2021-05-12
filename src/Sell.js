import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./Sell.css"

class Sell extends React.Component {
  render() {
    return (
      <div id="container">
      <Form id='form'>
        <h1> Seller Page </h1>
        <br />
        <Form.Label>Add Title</Form.Label>
        <Form.Control type="text" placeholder="Text" />
        <Form.Text className="text-muted">
          Mention the key features of your item(e.g brand,model,age type)
        </Form.Text>
        <br />

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Form.Text className="text-muted">
          Include condition , features, and reason for selling
        </Form.Text>
        <hr size="8" width="100%" color="black" />

        <br />
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Price (₹)
          </Form.Label>
          <Col sm="5">
            <Form.Control type="text" placeholder="Set a Price" />
          </Col>
        </Form.Group>
        <hr size="8" width="100%" color="black" />

        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Upload Image" />
        </Form.Group>
        <br />

        <Button variant="primary" type="submit">
          Post Now
        </Button>
      </Form>
      </div>
    );
  }
}
export default Sell;
