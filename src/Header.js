import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Navbar,Nav,Form,FormControl} from 'react-bootstrap';

class Header extends React.Component
{
  render()
  {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Categories</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    )
  }
}
export default Header;