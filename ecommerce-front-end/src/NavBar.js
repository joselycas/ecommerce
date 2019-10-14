import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const NavBar = () => {
return (


  <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Navbar.Brand href="#home">LOGO </Navbar.Brand>
          <Nav.Link href="/home">Home</Nav.Link> |
          <Nav.Link href="/register">Register</Nav.Link> |
          <Nav.Link href="/login">Login</Nav.Link> |
          <Nav.Link href="/logout">Logout</Nav.Link> |
          <Nav.Link href="/kitchen">Kitchen</Nav.Link> |
          <Nav.Link href="/bathroom">Bathroom</Nav.Link> |
          <Nav.Link href="/cart">Cart</Nav.Link> |
          <Nav.Link href="/toggleForm">Toggle Form</Nav.Link>
      </Nav>
  </Navbar>
  )
}

export default NavBar
