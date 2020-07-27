import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
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

function Hero() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="display-4">
          Welcome to <span>Maximus</span>!
        </h1>
        <p className="lead">A workout partner to kick your butt.</p>
        <br />
        <br />
        <p>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button className="ml-2" variant="outline-info" size="lg">
            Learn more
          </Button>
        </p>
      </Container>
    </Jumbotron>
  );
}

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
}

export { Home };
