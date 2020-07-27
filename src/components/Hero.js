import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

function Hero() {
  return (
    <Jumbotron fluid className="mb-0">
      <Container>
        <h1 className="display-2">
          Welcome to <span>Maximus</span>!
        </h1>
        <p className="lead">A workout partner to kick your butt.</p>
        <br />
        <br />
        <p>
          <LinkContainer to="/track">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </LinkContainer>
          <LinkContainer to="/#learnmore">
            <Button className="ml-2" variant="outline-info" size="lg">
              Learn more
            </Button>
          </LinkContainer>
        </p>
      </Container>
    </Jumbotron>
  );
}

export { Hero };
