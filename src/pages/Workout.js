import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import RangeSlider from "react-bootstrap-range-slider";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { genRandomExerciseList, MAX_NUM_EXERCISES } from "../utils/libs";

const init = ({ exercises }) => {
  return exercises.map((exercise) => ({ id: uuid(), name: exercise, reps: 0 }));
};

export const Workout = () => {
  const history = useHistory();
  const [newExercise, setNewExercise] = useState("");
  const [exercises, setExercises] = useState(() =>
    init({ exercises: genRandomExerciseList() })
  );

  const isListFull = () => exercises.length === MAX_NUM_EXERCISES;
  const isNewExerciseEmpty = () =>
    newExercise === "" || newExercise === undefined || newExercise === null;

  const handleAddExercise = () => {
    if (!isListFull() && !isNewExerciseEmpty()) {
      setExercises([{ id: uuid(), name: newExercise, reps: 0 }, ...exercises]);
      setNewExercise("");
    }
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
    setExercises(init({ exercises: genRandomExerciseList() }));
    setNewExercise("");
  };

  const handleCancel = () => {
    history.goBack();
  };

  return (
    <>
      <NavBar />
      <div className="py-5 bg-fade">
        <div className="mx-auto mw-500">
          <Container className="rounded-lg bg-white shadow">
            <div className="py-4">
              <h2>New Workout</h2>
              <Form className="mt-4">
                <Row className="mb-4">
                  <Col xs={10}>
                    <Form.Group className="mb-4">
                      <Form.Control
                        type="text"
                        value={newExercise}
                        placeholder={
                          exercises.length === MAX_NUM_EXERCISES
                            ? "Maximum number of exercises reached"
                            : "Add a new exercise"
                        }
                        onChange={({ target }) => setNewExercise(target.value)}
                        disabled={exercises.length === MAX_NUM_EXERCISES}
                      />
                    </Form.Group>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <span
                      className={
                        newExercise
                          ? "text-success"
                          : "text-muted disabled-icon"
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
                            variant="warning"
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
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
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
                    variant="outline-primary"
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
      </div>
      <Footer />
    </>
  );
};
