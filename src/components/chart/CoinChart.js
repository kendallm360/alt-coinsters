import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import PropTypes from "prop-types";
const CoinChart = ({ chartData, chartOptions }) => {
  return <div>{<Line data={chartData} options={chartOptions} />}</div>;
};
export default CoinChart;

// CoinChart.PropTypes = {
//   chartData: PropTypes.Requireable<any>,
//   chartOptions: PropTypes.Requireable<any>,
// };
