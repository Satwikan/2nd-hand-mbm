import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./Sell.css";
import axios from "axios";

// Testing token
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFkZDM2ODU2ZGNjZDE2ZGM5NjZjYzYiLCJpYXQiOjE2MjIwMDU0MDgsImV4cCI6MTYyNTYwNTQwOH0.JIAUk9uLcsLFrqOr0FYAmG1fCJCudKmRwusMXFH100g";

const Sell = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    axios
      .post("http://localhost:5000/post", formDataObj, {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch((err) => console.log(err));
    alert("We got your Submission! 😁");
  };
  const uploadImage = () => {
    var fileUpload = document.getElementById("fileUpload");
    fileUpload.onchange = function () {
      if (typeof FileReader != "undefined") {
        var dvPreview = document.getElementById("dvPreview");
        dvPreview.innerHTML = "";
        var regex = /^(.+)+(.jpg|.jpeg|.gif|.png|.bmp)$/;
        if (fileUpload.files.length > 4) {
          alert("we can't accept more than 4 images 😳");
          return false;
        }
        for (var i = 0; i < fileUpload.files.length; i++) {
          var file = fileUpload.files[i];
          if (regex.test(file.name.toLowerCase())) {
            var reader = new FileReader();
            reader.onload = function (e) {
              var img = document.createElement("IMG");
              img.height = "100";
              img.width = "100";
              img.src = e.target.result;
              dvPreview.appendChild(img);
            };
            reader.readAsDataURL(file);
          } else {
            alert(file.name + " is not a valid image file.");
            dvPreview.innerHTML = "";
            return false;
          }
        }
      } else {
        alert("This browser does not support HTML5 FileReader.");
      }
    };
  };

  return (
    <div
      id="container"
      style={{
        backgroundImage: `url("https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/06/BUILD-GREAT-CORPORATE-DESIGN.jpg?auto=format&q=60&w=1600&h=1000&fit=crop&crop=faces")`,
      }}
    >
      <Form
        // id="form"
        // action="http://localhost:5000/post"
        // method="POST"
        // enctype="multipart/form-data"
        onSubmit={onFormSubmit}
      >
        <h1> Seller Page </h1>
        <br />
        <Form.Label>Add Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="an attractive title..."
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
        Category : &nbsp;&nbsp;
        <select width="100%" color="black" required="true" name="category">
          <option name="computer">Computer Science related books 💻</option>
          <option name="electrical">Electrical related books ⚡</option>
          <option>Mechanical related books 🦾</option>
          <option>Civil related books 🧱</option>
          <option>Accessories(Drafter...etc)🔌</option>
          <option>None these match my thing 😁</option>
        </select>
        <br />
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
            id="fileUpload"
            label="Upload Image"
            name="images"
            required="true"
            multiple
            accept="image/*"
            onInput={uploadImage}
          />
          <div id="dvPreview"></div>
        </Form.Group>
        <br />
        {/* Tried to send post request through form itself with auth token*/}
        {/* <input type="hidden" name="jwt" value={token} /> */}
        <Button type="submit" id="sell-button">
          <strong> POST NOW </strong>
        </Button>
      </Form>
    </div>
  );
};

export default Sell;
