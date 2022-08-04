import { useEffect, useState } from "react";
import { fetchCoinPreviousDay, fetchATH } from "../../apiCalls";
import { assignName } from "../../helperFunctions";
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

{
  /* <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>; */
}

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
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
    // labels: coin.map((day) => day.t),
    // datasets: [
    //   {
    //     label: "Close Prices",
    //     data: coin.map((day) => day.c),
    //   },
    // ],
  });
  const [chartOptions, setChartOptions] = useState({});

  // useEffect(() => {
  //   fetchCoinPreviousDay("ETH").then((data) => {
  //     setCoinName(assignName("ETH"));
  //     setCoin(data.results[0]);
  //     setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
  //   });
  // }, []);

  useEffect(() => {
    fetchATH("ETH").then((data) => {
      // console.log(data.results)
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
        // labels: [data.results.map((day) => day.c)],
        labels: [
          "Jan",
          "Fed",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "EOD Close",
            // data: [data.results.map((day) => day.c)],
            data: [
              11, 32, 34, 1, 27, 3, 44, 5, 46, 7, 8, 9, 0, 11, 11, 44, 22, 33,
              334, 212, 42, 1, 2,
            ],

            borderColor: "rgb(53, 162, 235)",
          },
        ],
      });
      setChartOptions({
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Closes",
          },
        },
      });
      // data.results
      // .map((day) => {
      //   console.log(day);
      //   return day;
      // })
    });
  }, []);

  const handleSubmit = () => {
    setSubmitted(false);
  };

  const handleTickerSelect = (event) => {
    setTicker(event.target.value);
  };
  // console.log(chartData, "test");
  return submitted ? (
    <div className="coin-container">
      <div className="tab-selector">
        <select value={ticker} name={ticker} onChange={handleTickerSelect}>
          <option>--Choose A Top Alt--</option>
          <option value={"BTC"}>BITCOIN</option>
          <option value={"USDT"}>TETHER</option>
          <option value={"USDC"}>USD COIN</option>
          <option value={"ADA"}>CARDANO</option>
          <option value={"UNI"}>UNISWAP</option>
          <option value={"XLM"}>STELLAR</option>
          <option value={"SOL"}>SOLANA</option>
          <option value={"GRT"}>THE GRAPH</option>
          <option value={"DOGE"}>DOGECOIN</option>
          <option value={"XRP"}>RIPPLE</option>
          <option value={"DOT"}>POLKADOT</option>
          <option value={"LINK"}>CHAINLINK</option>
          <option value={"MATIC"}>POLYGON</option>
          <option value={"XTZ"}>TEZOS</option>
          <option value={"ATOM"}>COSMOS</option>
          <option value={"THETA"}>THETA NETWORK</option>
          <option value={"XMR"}>MONERO</option>
          <option value={"CHZ"}>CHILIZ</option>
          <option value={"SHIB"}>SHIBA INU</option>
          <option value={"ETH"}>ETHEREUM</option>
        </select>
        <Link to={`/coin/${ticker}`}>
          <button onClick={handleSubmit}>Try?</button>
        </Link>
      </div>
      <header className="coin-header">
        {/* <img src="" /> */}
        <h2>Coin Name: {coinName}</h2>
        <h3>Symbol: {symbol}</h3>
        <button className="favorite">Favorite</button>
      </header>
      <div className="chart">
        {/* <p>maybe?</p> */}
        <CoinChart chartData={chartData} chartOptions={chartOptions} />
        {/* <canvas id="myChart"></canvas> */}
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
