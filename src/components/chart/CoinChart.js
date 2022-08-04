import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const CoinChart = ({ chartData, chartOptions }) => {
  return <div>{<Line data={chartData} options={chartOptions} />}</div>;
};
export default CoinChart;
