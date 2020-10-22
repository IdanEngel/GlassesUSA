import React from "react";
import "../App.css";
import { Navbar, Nav } from "react-bootstrap";

function NavbarComp() {
  return (
    <div>
      <Navbar className="navbar" bg="primary" variant="dark">
        <Navbar.Brand href="/">GlassesUSA</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Sunglasses">Sunglasses</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
