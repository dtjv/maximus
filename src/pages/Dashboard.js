import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { HorizontalBar } from "react-chartjs-2";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { makeFakeWods } from "../utils/fake";
import { getSavedWods } from "../utils/db";
import { makeLabels, makeDatasets } from "../utils/data";
import { calculateCanvasHeight, CHART_OPTIONS } from "../utils/chart";

const DATA_SRC_REAL = "DATA_SRC_REAL";
const DATA_SRC_FAKE = "DATA_SRC_FAKE";

export const Dashboard = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState(DATA_SRC_REAL);

  useEffect(() => {
    async function getWods() {
      setIsLoading(true);

      const fetchWods =
        dataSource === DATA_SRC_REAL ? getSavedWods : makeFakeWods;
      const wods = await fetchWods();

      setData({
        labels: makeLabels(wods),
        datasets: makeDatasets(wods),
      });

      setIsLoading(false);
    }
    getWods();
  }, [dataSource]);

  const toggleDataSource = () =>
    setDataSource(dataSource === DATA_SRC_REAL ? DATA_SRC_FAKE : DATA_SRC_REAL);

  return (
    <>
      <NavBar />
      <div className="mx-auto bg-fade min-vh-100">
        <Container>
          <div className="py-5">
            <div className="d-md-flex justify-content-md-between align-items-md-center">
              <h2>Dashboard</h2>
              <Button variant="primary" size="sm" onClick={toggleDataSource}>
                {dataSource === DATA_SRC_REAL
                  ? "Show Fake Data"
                  : "Show Real Data"}
              </Button>
            </div>
            {isLoading ? (
              <Spinner animation="border" variant="primary" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              <>
                <p className="mt-3 mt-md-0">
                  Here's a list of your {data.labels.length} most recent
                  workouts. Click on a bar in the chart to see workout details.
                  Filter the chart by toggling bars in the legend.
                </p>
                <div
                  className="position-relative mt-4"
                  style={{
                    height: `${calculateCanvasHeight(data.labels.length)}px`,
                  }}
                >
                  <HorizontalBar data={data} options={CHART_OPTIONS} />
                </div>
              </>
            )}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};
