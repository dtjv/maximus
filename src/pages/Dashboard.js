import React from "react";
import Container from "react-bootstrap/Container";
import { HorizontalBar } from "react-chartjs-2";
import { NavBar } from "../components/NavBar";
import { genWods, genLabels, genDatasets } from "../utils/libs";

const LIST_BASE_SIZE = 10;
const CANVAS_BASE_HEIGHT = 250;

const wods = genWods(90);
const data = {
  labels: genLabels(wods).reverse(),
  datasets: genDatasets(wods).reverse(),
};
const options = {
  legend: {
    display: false,
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
      <div className="mx-auto">
        <Container>
          <div
            className="py-5 position-relative"
            style={{ height: `${setCanvasHeight(data.labels.length)}px` }}
          >
            <HorizontalBar data={data} options={options} />
          </div>
        </Container>
      </div>
    </>
  );
};
