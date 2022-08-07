import "./CoinChart.css";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import PropTypes from "prop-types";
const CoinChart = ({ chartData, chartOptions }) => {
  return (
    <div className="chart-display">
      {<Line data={chartData} options={chartOptions} />}
    </div>
  );
};
export default CoinChart;

CoinChart.propTypes = {
  chartData: PropTypes.object.isRequired,
  chartOptions: PropTypes.object.isRequired,
};
