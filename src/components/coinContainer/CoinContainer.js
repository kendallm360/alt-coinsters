import { useEffect, useState } from "react";
import { fetchCoinPreviousDay, fetchAnnuals } from "../../apiCalls";
import { assignName, btcAnnual, tickers, assignData } from "../../utils";
import "./CoinContainer.css";
import Coin from "../coin/Coin";
import CoinDetails from "../coinDetails/CoinDetails";
import { Link } from "react-router-dom";
import CoinChart from "../chart/CoinChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const CoinContainer = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineController,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const [ticker, setTicker] = useState("");
  const [coinName, setCoinName] = useState("");
  const [submitted, setSubmitted] = useState(true);
  const [annualHigh, setAnnualHigh] = useState(0);
  const [annualLow, setAnnualLow] = useState(0);
  const [annualVolume, setAnnualVolume] = useState(0);
  const [coin, setCoin] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [coinData, setCoinData] = useState("");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    fetchCoinPreviousDay("ETH").then((data) => {
      setCoinName(assignName("ETH"));
      setCoin(data.results[0]);
      setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
      setCoinData(assignData("ETH"));
    });
  }, []);

  useEffect(() => {
    fetchAnnuals("ETH").then((data) => {
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
            borderColor: "orange",
          },
          // {
          //   label: "HIGHEST BTC CLOSE",
          //   data: btcAnnual.map((day) => day.h),
          //   borderColor: "blue",
          // },
        ],
      });
      setChartOptions({
        responsive: true,
        plugins: {
          // legend: {
          //   display: true,
          //   position: "top",
          // },
          title: {
            display: true,
            text: "HIGHEST PRICES PER MONTH",
          },
        },
      });
    });
  }, []);

  const handleSubmit = () => {
    setSubmitted(false);
  };

  const handleTickerSelect = (event) => {
    setTicker(event.target.value);
  };

  return submitted ? (
    <div className="coin-container">
      <div className="coin-selector">
        <select value={ticker} name={ticker} onChange={handleTickerSelect}>
          <option>--Choose A Top Alt--</option>
          {tickers.map((stock) => {
            return <option value={stock.ticker}>{stock.crypto}</option>;
          })}
        </select>
        <Link to={`/coin/${ticker}`}>
          <button onClick={handleSubmit}>Search</button>
        </Link>
      </div>
      <header className="coin-header">
        <img className="coin-logo" src={coinData.img} />
        <h2>Coin Name: {coinName}</h2>
        <h3>Symbol: {symbol}</h3>
        <button className="favorite">Favorite</button>
      </header>
      <div className="chart">
        <CoinChart chartData={chartData} chartOptions={chartOptions} />
      </div>
      <CoinDetails
        coin={coin}
        annualHigh={annualHigh}
        annualLow={annualLow}
        annualVolume={annualVolume}
      />
    </div>
  ) : (
    <Coin ticker={ticker} />
  );
};

export default CoinContainer;
