import { useEffect, useState } from "react";
import { fetchCoinPreviousDay, fetchAnnuals } from "../../apiCalls";
import PropTypes from "prop-types";
import { assignName, tickers } from "../../helperFunctions";
import CoinDetails from "../coinDetails/CoinDetails";
import CoinChart from "../chart/CoinChart";
import "./Coin.css";
import { Link } from "react-router-dom";

const Coin = ({ ticker, tickerSymbol }) => {
  const [coinName, setCoinName] = useState("");
  const [coin, setCoin] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [alt, setAlt] = useState("");
  const [annualHigh, setAnnualHigh] = useState(0);
  const [annualLow, setAnnualLow] = useState(0);
  const [annualVolume, setAnnualVolume] = useState(0);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  //   useEffect(() => {
  //     setCoinName(assignName(tickerSymbol));
  //     fetchCoinPreviousDay(tickerSymbol).then((data) => {
  //       setCoin(data.results[0]);
  //       setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
  //     });
  //   }, []);

  //   useEffect(() => {
  //     fetchAnnuals(tickerSymbol).then((data) => {
  //       setAnnualHigh(
  //         data.results
  //           .map((day) => day.h)
  //           .sort()
  //           .pop()
  //       );
  //       setAnnualLow(data.results.map((day) => day.l).sort()[0]);
  //       setAnnualVolume(
  //         data.results
  //           .map((day) => day.v)
  //           .sort()
  //           .pop()
  //       );
  //       setChartData({
  //         labels: [
  //           "August",
  //           "September",
  //           "October",
  //           "November",
  //           "December",
  //           "January",
  //           "February",
  //           "March",
  //           "April",
  //           "May",
  //           "June",
  //           "July",
  //           "August",
  //         ],
  //         datasets: [
  //           {
  //             label: "HIGHEST CLOSE",
  //             data: data.results.map((day) => day.h),
  //             borderColor: "rgb(53, 162, 235)",
  //           },
  //         ],
  //       });
  //       setChartOptions({
  //         responsive: true,
  //         plugins: {
  //           //   legend: {
  //           //     position: "top",
  //           //   },
  //           title: {
  //             display: true,
  //             text: "HIGHEST PRICES PER MONTH",
  //           },
  //         },
  //       });
  //     });
  //   }, []);

  const handleRender = () => {
    setCoinName(assignName(alt));
    fetchCoinPreviousDay(alt).then((data) => {
      setCoin(data.results[0]);
      setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
    });
    fetchAnnuals(alt).then((data) => {
      setAnnualHigh(
        data.results
          .map((day) => day.h)
          .sort()
          .pop()
      );
      setAnnualLow(data.results.map((day) => day.l).sort()[0]);
      setAnnualVolume(
        data.results
          .map((day) => day.v)
          .sort()
          .pop()
      );
      setChartData({
        labels: [
          "August",
          "September",
          "October",
          "November",
          "December",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
        ],
        datasets: [
          {
            label: "HIGHEST CLOSE",
            data: data.results.map((day) => day.h),
            borderColor: "rgb(53, 162, 235)",
          },
        ],
      });
      setChartOptions({
        responsive: true,
        plugins: {
          //   legend: {
          //     position: "top",
          //   },
          title: {
            display: true,
            text: "HIGHEST PRICES PER MONTH",
          },
        },
      });
    });
  };

  const handleAlt = (event) => {
    setAlt(event.target.value);
  };

  const testLogs = () => {};

  return (
    <div className="coin-wrapper">
      <header className="coin-header">
        {/* <img src="" /> */}
        <h2>Coin Name: {coinName}</h2>
        <h3>Symbol: {symbol.length > 1 ? symbol : `USD${symbol}`}</h3>
        <button className="favorite" onClick={testLogs}>
          Favorite
        </button>
      </header>
      <div className="chart">
        <CoinChart chartData={chartData} chartOptions={chartOptions} />
      </div>
      <CoinDetails
        coin={coin}
        annualHigh={annualHigh}
        annualLow={annualLow}
        setAnnualVolume={annualVolume}
      />

      <div className="other-coins">
        <select value={alt} onChange={handleAlt}>
          <option>--Choose A Top Alt--</option>
          {tickers.map((stock) => {
            return <option value={stock.ticker}>{stock.crypto}</option>;
          })}
        </select>
        <Link to={`/coin/${alt}`}>
          <button onClick={handleRender}>test?</button>
        </Link>
      </div>
    </div>
  );
};
export default Coin;

Coin.propTypes = {
  tickerSymbol: PropTypes.string,
};
