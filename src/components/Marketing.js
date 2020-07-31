import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import dashboardImage from "../images/dashboard.png";
import workoutImage from "../images/workout.png";

function Marketing() {
  return (
    <>
      <div>
        <Container>
          <Row className="pt-5">
            <Col
              className="d-flex flex-column justify-content-center"
              xs={12}
              md={6}
            >
              <h1>Welcome to Maximus!</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
              <div>
                <LinkContainer to="/workout">
                  <Button variant="info">Start a Workout</Button>
                </LinkContainer>
              </div>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Image src={workoutImage} fluid />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="pt-5">
            <Col
              className="d-flex flex-column justify-content-center"
              xs={12}
              md={{ span: 6, order: "last" }}
            >
              <h1>Visualize Workouts</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
              <div>
                <LinkContainer to="/dashboard">
                  <Button variant="info">Go to Dashboard</Button>
                </LinkContainer>
              </div>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Image src={dashboardImage} fluid />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export { Marketing };
