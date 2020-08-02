import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import dashboardImage from "../images/dashboard.png";
import workoutImage from "../images/workout.png";

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="min-vh-100">
        <div className="min-vh-50 d-flex align-items-center">
          <Container>
            <Row className="pt-5">
              <Col
                className="d-flex flex-column justify-content-center"
                xs={12}
                md={6}
              >
                <h1>Welcome to Maximus</h1>
                <p className="lead">
                  Maximus is an ultra minimal workout tracker. Inspired during
                  COVID-19 and my lack of available strength equipment, I relied
                  on rep count as my progression and intensity gauge.
                </p>
                <p className="lead">
                  Easily add and remove exercises from your workout. Use the
                  sliders to to quickly record reps completed, save the workout
                  and head to the Dashboard.
                </p>
                <div>
                  <LinkContainer to="/workout">
                    <Button variant="primary">Start a Workout</Button>
                  </LinkContainer>
                </div>
              </Col>
              <Col xs={12} md={6} className="mt-4 mt-md-0">
                <Image src={workoutImage} fluid />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="mb-5 min-vh-50 d-flex align-items-center">
          <Container>
            <Row className="pt-5">
              <Col
                className="d-flex flex-column justify-content-center"
                xs={12}
                md={{ span: 6, order: "last" }}
              >
                <h1>Visualize Workouts</h1>
                <p className="lead">
                  Maximus renders your last 30 workouts in rainbow of bars.
                  Hover over any bar for a snapshot of that day's workout
                  details.
                </p>
                <p className="lead">
                  Out of the box, Maximus reports all exercises. To filter out
                  an exercise and simplify the chart, click on an exercise in
                  the legend and watch the chart dynamically update.
                </p>
                <div>
                  <LinkContainer to="/dashboard">
                    <Button variant="primary">Go to Dashboard</Button>
                  </LinkContainer>
                </div>
              </Col>
              <Col xs={12} md={6} className="mt-4 mt-md-0">
                <Image src={dashboardImage} fluid />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};
