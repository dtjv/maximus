import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const setCursorOnActive = (path) =>
    location.pathname === path ? { cursor: "default" } : { cursor: "pointer" };

  return (
    <>
      <Navbar
        expand="sm"
        className="justify-content-between"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">Maximus</Navbar.Brand>
          <Nav>
            <LinkContainer
              to="/dashboard"
              className={
                location.pathname === "/dashboard" ? "d-none" : "d-block"
              }
              style={setCursorOnActive("/dashboard")}
            >
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to="/workout"
              className={
                location.pathname === "/workout"
                  ? "d-none"
                  : "d-none d-sm-block ml-2"
              }
              style={setCursorOnActive("/workout")}
            >
              <Button variant="outline-light">Start a Workout</Button>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
