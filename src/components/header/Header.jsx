import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Emad Idris</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
