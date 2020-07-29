import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import RangeSlider from "react-bootstrap-range-slider";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import { NavBar } from "../components/NavBar";

const data = ["squats", "push-ups", "pull-ups"];

const init = ({ exercises }) => {
  return exercises.map((exercise) => ({ id: uuid(), name: exercise, reps: 0 }));
};

export const Workout = () => {
  const history = useHistory();
  const [newExercise, setNewExercise] = useState("");
  const [exercises, setExercises] = useState(() => init({ exercises: data }));

  const handleAddExercise = () => {
    setExercises([...exercises, { id: uuid(), name: newExercise, reps: 0 }]);
    setNewExercise("");
  };

  const handleRemoveExercise = (id) => {
    setExercises(exercises.filter((exercise) => id !== exercise.id));
  };

  const handleRangeChange = (id, reps) => {
    setExercises(
      exercises.map((exercise) => {
        return id === exercise.id ? { ...exercise, reps } : exercise;
      })
    );
  };

  const handleSubmit = () => {
    console.log(exercises, "<-- save exercises");
  };

  const handleReset = () => {
    setExercises(init({ exercises: data }));
    setNewExercise("");
  };

  const handleCancel = () => {
    history.goBack();
  };

  return (
    <>
      <NavBar />
      <div className="mx-auto mw-sm">
        <Container>
          <div className="py-5">
            <h2>New Workout</h2>
            <Form className="mt-4">
              <Row className="mb-4">
                <Col xs={10}>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      value={newExercise}
                      placeholder="Add a new exercise"
                      onChange={({ target }) => setNewExercise(target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col className="d-flex justify-content-end">
                  <span
                    className={
                      newExercise ? "text-success" : "text-muted disabled-icon"
                    }
                    onClick={handleAddExercise}
                    role="img"
                    aria-label="add exercise"
                  >
                    <svg
                      className="add-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </Col>
              </Row>

              {exercises.map((exercise) => {
                return (
                  <div key={exercise.id} className="ml-1">
                    <Row>
                      <Col xs={10}>
                        <RangeSlider
                          value={exercise.reps}
                          onChange={({ target }) =>
                            handleRangeChange(exercise.id, target.value)
                          }
                          variant="secondary"
                          tooltip="on"
                          tooltipPlacement="top"
                        />
                      </Col>
                      <Col className="d-flex align-items-center justify-content-end">
                        <span
                          className="text-danger"
                          onClick={() => handleRemoveExercise(exercise.id)}
                          role="img"
                          aria-label="delete exercise"
                        >
                          <svg
                            className="delete-icon"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </Col>
                    </Row>
                    <p className="mb-5 mt-n2">
                      <strong>{exercise.name}</strong>
                    </p>
                  </div>
                );
              })}
              <div className="mt-4">
                <Button variant="primary" onClick={handleSubmit}>
                  Save
                </Button>
                <Button
                  variant="outline-dark"
                  className="ml-2"
                  onClick={handleReset}
                >
                  Reset
                </Button>
                <Button
                  variant="outline-danger"
                  className="ml-2"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};
