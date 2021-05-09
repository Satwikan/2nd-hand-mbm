import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  Row,
  Col
} from "react-bootstrap";


class Sell extends React.Component{
    render() {
        return (
          
          <Form>
<h1  > Seller Page </h1>
<br/>
           <Form.Label>Add Title</Form.Label>
  <Form.Control type="text" placeholder="Text" />
  <Form.Text className="text-muted">
          Mention the key features of your item(e.g brand,model,age type)
  </Form.Text>
  <br/>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={5} />
  </Form.Group>
  <Form.Text className="text-muted">
          Include condition , features, and reason for selling
  </Form.Text>
  <hr size="8" width="100%" color="black" />  

<br/>
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
<br/>

  <Button variant="primary" type="submit">
        Post Now
      </Button>
</Form>
        );
      }
    }
export default Sell;











// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// const Footer = () => {
//   return (
//     <MDBFooter color="brown" className="font-small pt-4 mt-4">
//       <MDBContainer fluid className="text-center text-md-left">
//         <MDBRow>
//           <MDBCol md="6">
//             <h5 className="title">Footer Content</h5>
//             <p>
//               Here you can use rows and columns here to organize your footer
//               content.
//             </p>
//           </MDBCol>
//           <MDBCol md="6">
//             <h5 className="title">Links</h5>
//             <ul>
//               <li className="list-unstyled">
//                 <a href="#!">Link 1</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 2</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 3</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 4</a>
//               </li>
//             </ul>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
     
//     </MDBFooter>
//   );
// }

// export default Footer;
