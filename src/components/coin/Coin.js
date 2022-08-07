import { useEffect, useState } from "react";
import { fetchCoinPreviousDay, fetchAnnuals } from "../../apiCalls";
import PropTypes from "prop-types";
import { assignName, tickers, assignData, favorites } from "../../utils";
import CoinDetails from "../coinDetails/CoinDetails";
import CoinChart from "../chart/CoinChart";
import "./Coin.css";
import { Link } from "react-router-dom";

const Coin = ({ tickerSymbol }) => {
  const [coinName, setCoinName] = useState("");
  const [coin, setCoin] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [alt, setAlt] = useState("");
  const [annualHigh, setAnnualHigh] = useState(0);
  const [annualLow, setAnnualLow] = useState(0);
  const [annualVolume, setAnnualVolume] = useState(0);
  const [coinData, setCoinData] = useState("");

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setCoinName(assignName(tickerSymbol));
    fetchCoinPreviousDay(tickerSymbol).then((data) => {
      setCoin(data.results[0]);
      setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
      setCoinData(assignData(tickerSymbol));
    });
  }, []);

  useEffect(() => {
    fetchAnnuals(tickerSymbol).then((data) => {
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
          //   "August",
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
          //   "March",
          //   "April",
          //   "May",
          //   "June",
          //   "July",
          //   "August",
        ],
        // labels: [
        //   data.results.map((day) => new Date(day.t).toLocaleDateString()),
        // ],

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
  }, []);

  const handleRender = () => {
    setCoinName(assignName(alt));
    setCoinData(assignData(alt));
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
        // labels: [data.results.map((day) => new Date(day.t))],
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
        scales: {
          y: {
            suggestedMax: data.results
              .map((day) => day.h)
              .sort()
              .pop(),
          },
        },
      });
    });
  };

  const handleAlt = (event) => {
    setAlt(event.target.value);
  };

  const addToFavorites = () => {
    favorites.push({
      yearHigh: annualHigh,
      yearLow: annualLow,
      lastClose: coin.c,
      coinInfo: coinData,
    });
  };

  return (
    <div className="coin-wrapper">
      <div className="other-coins">
        <select value={alt} onChange={handleAlt}>
          <option>--Choose A Top Alt--</option>
          {tickers.map((stock) => {
            return <option value={stock.ticker}>{stock.crypto}</option>;
          })}
        </select>
        <Link to={`/coin/${alt}`}>
          <button onClick={handleRender}>Search</button>
        </Link>
      </div>
      <header className="coin-header">
        <div className="coin-information">
          <img className="coin-logo" src={coinData.img} />
          <h2 className="coin-name">{coinData.crypto}</h2>
          {/* <span>({symbol.length > 1 ? symbol : `USD${symbol}`})</span> */}
          <span>{coinData.ticker}</span>
        </div>
        <button className="add-to-watchlist" onClick={addToFavorites}>
          Add to Watchlist
        </button>
      </header>
      <div className="chart">
        <CoinChart chartData={chartData} chartOptions={chartOptions} />
      </div>
      <CoinDetails
        coin={coin}
        annualHigh={annualHigh}
        annualLow={annualLow}
        annualVolume={annualVolume}
        coinData={coinData}
      />
    </div>
  );
};
export default Coin;

Coin.propTypes = {
  tickerSymbol: PropTypes.string,
};
