import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./Sell.css";
import axios from "axios";

const Sell = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    axios
      .post("http://localhost:5000/post", formDataObj)
      .then(function (response) {
        console.log(response);
      })
      .catch((err) => console.log(err));
      alert('Form is Submitted Successfully');
  };
  
  return (
    <div id="container">
      <Form id="form" onSubmit={onFormSubmit}>
        <h1> Seller Page </h1>
        <br />
        <Form.Label>Add Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Text"
          name="title"
          required="true"
        />
        <Form.Text className="text-muted">
          Mention the key features of your item(e.g brand,model,age type)
        </Form.Text>
        <br />

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="description"
            required="true"
          />
        </Form.Group>
        <Form.Text className="text-muted">
          Include condition , features, and reason for selling
        </Form.Text>
        <hr size="8" width="100%" color="black" />

        <br />
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Price (₹)
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="number"
              placeholder="Set a Price"
              name="price"
              required="true"
            />
          </Col>
        </Form.Group>
        <hr size="8" width="100%" color="black" />

        <Form.Group>
          <Form.File
            id="exampleFormControlFile1"
            label="Upload Image"
            name="image"
            required="true"
          />
        </Form.Group>
        <br />

        <Button variant="primary" type="submit">
          Post Now
        </Button>
      </Form>
    </div>
  );
};

export default Sell;
