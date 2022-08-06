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
  // const [ticker, setTicker] = useState("");
  // const [coinName, setCoinName] = useState("");
  // const [submitted, setSubmitted] = useState(true);
  // const [annualHigh, setAnnualHigh] = useState(0);
  // const [annualLow, setAnnualLow] = useState(0);
  // const [annualVolume, setAnnualVolume] = useState(0);
  // const [coin, setCoin] = useState([]);
  // const [symbol, setSymbol] = useState("");
  // const [coinData, setCoinData] = useState("");
  // // const [isHovering, setIsHovering] = useState(false);
  // const [chartData, setChartData] = useState({
  //   labels: [],
  //   datasets: [],
  // });
  // const [chartOptions, setChartOptions] = useState({});
  return <Coin />;
};

export default CoinContainer;
