const BASE_LIST_SIZE = 10;
const BASE_CHART_HEIGHT = 250;

export const CHART_OPTIONS = {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      align: "start",
    },
    tooltips: {
      mode: "index",
      intersect: false,
      filter: (item) => parseInt(item.value, 10) > 0,
    },
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        min: 0,
      },
    },
    y: {
      stacked: true,
      gridLines: {
        display: false,
      },
    },
  },
};

export const calculateCanvasHeight = (listSize = BASE_LIST_SIZE) => {
  let factor = 1;
  while (listSize >= BASE_LIST_SIZE * factor) {
    factor += 1;
  }

  return BASE_CHART_HEIGHT * factor;
};
