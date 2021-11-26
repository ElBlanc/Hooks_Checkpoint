import React from 'react'
import {Navbar ,Container ,Nav} from 'react-bootstrap'

const Navigation = () => {
    return (
        
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">BlancMovies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      
    )
}

export default Navigation
