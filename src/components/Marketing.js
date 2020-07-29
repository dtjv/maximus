import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import writerImage from "../images/writer.jpg";

function Marketing() {
  return (
    <>
      <div>
        <Container>
          <Row className="py-5">
            <Col
              className="d-flex flex-column justify-content-center"
              xs={12}
              md={6}
            >
              <h1 className="display-4">Welcome to Maximus!</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
              <LinkContainer to="/workout">
                <Button variant="outline-info">Start a Workout</Button>
              </LinkContainer>
            </Col>
            <Col xs={12} md={6}>
              <Image src={writerImage} fluid />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="py-5">
            <Col
              className="d-flex flex-column justify-content-center"
              xs={12}
              md={{ span: 6, order: "last" }}
            >
              <h1 className="display-4">Visualize Workouts</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
              <LinkContainer to="/dashboard">
                <Button variant="outline-info">Go to Dashboard</Button>
              </LinkContainer>
            </Col>
            <Col xs={12} md={6}>
              <Image src={writerImage} fluid />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export { Marketing };
