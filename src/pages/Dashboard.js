import React from "react";
import Container from "react-bootstrap/Container";
import { HorizontalBar } from "react-chartjs-2";
import { NavBar } from "../components/NavBar";
import { genWods, genLabels, genDatasets } from "../utils/libs";

//const chartColors = {
//red: "rgb(255, 99, 132)",
//orange: "rgb(255, 159, 64)",
//yellow: "rgb(255, 205, 86)",
//green: "rgb(75, 192, 192)",
//blue: "rgb(54, 162, 235)",
//purple: "rgb(153, 102, 255)",
//grey: "rgb(201, 203, 207)",
//};

//const wods = [
//{
//id: 100,
//date: "01-01-2020",
//exercises: [
//{ id: 1, name: "squats", reps: 150 },
////{ id: 2, name: "pushup", reps: 75 },
//{ id: 3, name: "pullup", reps: 50 },
//],
//},
//{
//id: 200,
//date: "02-0-2020",
//exercises: [
//{ id: 1, name: "squats", reps: 50 },
//{ id: 2, name: "pushup", reps: 30 },
//{ id: 3, name: "pullup", reps: 25 },
//],
//},
//{
//id: 300,
//date: "03-01-2020",
//exercises: [
//{ id: 1, name: "squats", reps: 100 },
//{ id: 2, name: "pushup", reps: 100 },
//{ id: 3, name: "pullup", reps: 50 },
//],
//},
//];
//console.log(wods);

//const data = {
//labels: ["01-01", "02-01", "03-01"],
//datasets: [
//{
//label: "squats",
//backgroundColor: chartColors.red,
//data: [150, 50, 100],
//},
//{
//label: "pushups",
//backgroundColor: chartColors.blue,
//data: [0, 30, 100],
//},
//{
//label: "pullups",
//backgroundColor: chartColors.green,
//data: [50, 25, 50],
//},
//],
//};

const wods = genWods(10);
const data = {
  labels: genLabels(wods),
  datasets: genDatasets(wods),
};

//console.log(wods);
//console.log(data);
const options = {
  title: {
    display: true,
    text: "Maximus Workouts",
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  responsive: true,
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

export const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="mx-auto">
        <Container>
          <div className="py-5">
            <HorizontalBar data={data} options={options} />
          </div>
        </Container>
      </div>
    </>
  );
};
