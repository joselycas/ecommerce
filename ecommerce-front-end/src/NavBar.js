import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const NavBar = () => {
return (


  <Navbar bg="light" expand="lg">

      <Nav className="mr-auto">
          <Navbar.Brand href="#home">LOGO </Navbar.Brand>
        <Nav.Link href="#home">Home</Nav.Link> |
        <Nav.Link href="#link">Kitchen</Nav.Link> |
        <Nav.Link href="#link">Bathroom</Nav.Link> |
        <Nav.Link href="#link">Inspiration Room</Nav.Link>
        </Nav>
  </Navbar>




  )

}

export default NavBar
