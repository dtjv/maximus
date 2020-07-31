import React from "react";
import Container from "react-bootstrap/Container";
import { HorizontalBar } from "react-chartjs-2";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { genWods, genLabels, genDatasets } from "../utils/libs";

const LIST_BASE_SIZE = 10;
const CANVAS_BASE_HEIGHT = 250;

const wods = genWods(30);
const data = {
  labels: genLabels(wods).reverse(),
  datasets: genDatasets(wods).reverse(),
};
const options = {
  legend: {
    display: true,
    align: "start",
  },
  tooltips: {
    mode: "index",
    intersect: false,
    filter: (item) => parseInt(item.value, 10) > 0,
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        stacked: true,
        ticks: {
          min: 0,
        },
      },
    ],
    yAxes: [
      {
        stacked: true,
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const setCanvasHeight = (listSize) => {
  let factor = 1;
  while (listSize >= LIST_BASE_SIZE * factor) {
    factor += 1;
  }

  return CANVAS_BASE_HEIGHT * factor;
};

export const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="mx-auto bg-fade">
        <Container>
          <div className="py-5">
            <h2>Workout Summary</h2>
            <p>
              Here's a list of your {data.labels.length} most recent workouts.
              Click on a bar in the chart to see workout details.
            </p>
            <div
              className="position-relative mt-4"
              style={{ height: `${setCanvasHeight(data.labels.length)}px` }}
            >
              <HorizontalBar data={data} options={options} />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};
