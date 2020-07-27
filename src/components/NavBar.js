import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand href="/home">MyReps!</Navbar.Brand>
        <Nav>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signin">
            <Button className="ml-3" variant="outline-info">
              Sign In
            </Button>
          </LinkContainer>
        </Nav>
      </Navbar>
    </>
  );
}

export { NavBar };
