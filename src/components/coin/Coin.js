import { useEffect, useState } from "react";
import { fetchCoinPreviousDay, fetchATH } from "../../apiCalls";
import PropTypes from "prop-types";
import { assignName } from "../../helperFunctions";
import CoinDetails from "../coinDetails/CoinDetails";
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

  //   useEffect(() => {
  //     setCoinName(assignName(ticker));
  //     fetchCoinPreviousDay(ticker).then((data) => {
  //       setCoin(data.results[0]);
  //       setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
  //     });
  //   }, []);

  //   useEffect(() => {
  //     fetchATH(ticker).then((data) => {
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
  //     });
  //   }, []);

  const handleRender = () => {
    setCoinName(assignName(alt));
    fetchCoinPreviousDay(alt).then((data) => {
      setCoin(data.results[0]);
      setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
    });
    fetchATH(alt).then((data) => {
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
    });
  };

  const handleAlt = (event) => {
    setAlt(event.target.value);
  };

  return (
    <div className="coin-wrapper">
      <header className="coin-header">
        {/* <img src="" /> */}
        <h2>Coin Name: {coinName}</h2>
        <h3>Symbol: {symbol.length > 1 ? symbol : `USD${symbol}`}</h3>
        <button className="favorite">Favorite</button>
      </header>
      {/* <div className="chart">
        <p>maybe?</p>
    </div> */}
      <CoinDetails
        coin={coin}
        annualHigh={annualHigh}
        annualLow={annualLow}
        setAnnualVolume={annualVolume}
      />

      <div className="other-coins">
        <select value={alt} onChange={handleAlt}>
          <option>--Choose A Top Alt--</option>
          <option value={"BTC"}>BITCOIN</option>
          <option value={"ETH"}>ETHEREUM</option>
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
          <option value={"LINK"}>LINK</option>
          <option value={"MATIC"}>POLYGON</option>
          <option value={"XTZ"}>TEZOS</option>
          <option value={"ATOM"}>COSMOS</option>
          <option value={"THETA"}>THETA NETWORK</option>
          <option value={"XMR"}>MONERO</option>
          <option value={"CHZ"}>CHILIZ</option>
          <option value={"SHIB"}>SHIBA INU</option>
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
  ticker: PropTypes.string,
};
