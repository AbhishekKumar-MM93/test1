import React from 'react'
import {Navbar,Nav,Container} from "react-bootstrap"


const NavBar =()=> {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{
      margin:'auto'
    }} >
      <Container>
        <Nav.Link href='/'>
        <Navbar.Brand >Portal</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav >
            <Nav.Link href="/logIn">LogIn</Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
  )
}

export default NavBar