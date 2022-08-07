import "./Coin.css";
import { useEffect, useState } from "react";
import { fetchCoinPreviousDay, fetchAnnuals } from "../../apiCalls";
import PropTypes from "prop-types";
import { assignName, tickers, assignData, favorites } from "../../utils";
import CoinDetails from "../coinDetails/CoinDetails";
import CoinChart from "../chart/CoinChart";
import { Link } from "react-router-dom";
import Error from "../error/Error";

const Coin = ({ tickerSymbol }) => {
  const [coinName, setCoinName] = useState("");
  const [coin, setCoin] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [alt, setAlt] = useState("");
  const [annualHigh, setAnnualHigh] = useState(0);
  const [annualLow, setAnnualLow] = useState(0);
  const [annualVolume, setAnnualVolume] = useState(0);
  const [coinData, setCoinData] = useState("");
  const [favorited, setFavorited] = useState(false);
  const [error, setError] = useState(false);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setCoinName(assignName(tickerSymbol));
    fetchCoinPreviousDay(tickerSymbol)
      .then((data) => {
        setCoin(data.results[0]);
        setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
        setCoinData(assignData(tickerSymbol));
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    fetchAnnuals(tickerSymbol)
      .then((data) => {
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
              label: "MONTHLY CLOSE",
              data: data.results.map((day) => day.h),
              borderColor: "rgb(50, 205, 50)",
            },
          ],
        });
        setChartOptions({
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "HIGHEST PRICES PER MONTH",
            },
          },
        });
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const handleRender = () => {
    setCoinName(assignName(alt));
    setCoinData(assignData(alt));
    fetchCoinPreviousDay(alt)
      .then((data) => {
        setCoin(data.results[0]);
        setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
      })
      .catch(() => {
        setError(true);
      });
    fetchAnnuals(alt)
      .then((data) => {
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
              label: "MONTHLY CLOSE",
              data: data.results.map((day) => day.h),
              borderColor: "rgb(50, 205, 50)",
            },
          ],
        });
        setChartOptions({
          responsive: true,
          plugins: {
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
      })
      .catch(() => {
        setError(true);
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
    setFavorited(true);
  };

  return (
    <div className="coin-wrapper">
      {error ? (
        <Error />
      ) : (
        <>
          <div className="other-coins">
            <select value={alt} onChange={handleAlt}>
              <option>---Top Altcoins---</option>
              {tickers.map((stock) => {
                return (
                  <option key={Date.now() + stock.ticker} value={stock.ticker}>
                    {stock.crypto}
                  </option>
                );
              })}
            </select>
            <Link to={`/coin/${alt}`}>
              {alt && (
                <button className="search" onClick={handleRender}>
                  Search
                </button>
              )}
            </Link>
          </div>
          <header className="coin-header">
            <div className="coin-information">
              <img className="coin-logo" src={coinData.img} />
              <h2 className="coin-name">{coinData.crypto}</h2>
              <span>{coinData.ticker}</span>
              {favorited && <span>⭐️</span>}
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
            addToFavorites={addToFavorites}
            setFavorited={setFavorited}
          />
        </>
      )}
    </div>
  );
};
export default Coin;

Coin.propTypes = {
  tickerSymbol: PropTypes.string,
};
