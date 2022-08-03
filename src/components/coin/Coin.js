import { useEffect, useState } from "react";
import { fetchCoinPreviousDay } from "../../apiCalls";
import PropTypes from "prop-types";
import "./Coin.css";

const Coin = ({ ticker }) => {
  const [coinName, setCoinName] = useState("");
  const [coin, setCoin] = useState([]);
  const [symbol, setSymbol] = useState("");
  const coins = ["DOGe", "CART", "BLah"];

  useEffect(() => {
    fetchCoinPreviousDay(ticker).then((data) => {
      assignName();
      setCoin(data.results[0]);
      setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
    });
  }, []);

  const assignName = () => {
    if (ticker === "LINK") {
      setCoinName("ChainLink");
    }
  };

  const handleRender = (event) => {
    fetchCoinPreviousDay(event.target.value).then((data) => {
      setCoin(data.results[0]);
      setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
    });
  };

  return (
    <div className="coin-wrapper">
      <header className="coin-header">
        {/* <img src="" /> */}
        <h2>Coin Name: {coinName}</h2>
        <h3>Symbol: {symbol}</h3>
        <button className="favorite">Favorite</button>
      </header>
      {/* <div className="chart">
        <p>maybe?</p>
      </div> */}
      <section className="coin-details">
        {/* <h3>Market Cap</h3>
        <p>number</p> */}
        {/* <h3>Volume</h3>
        <p>number</p> */}
        <div className="volume">
          <h3>Previous Day's Volume</h3>
          <p>{coin.v}...people</p>
        </div>
        <div className="high">
          <h3>Previous Day's High</h3>
          <p>${coin.h}</p>
        </div>
        <div className="low">
          <h3>Previous Day's Low</h3>
          <p>${coin.l}</p>
        </div>
        <div className="close">
          <h3>Previous Day's close</h3>
          <p>${coin.c}</p>
        </div>
        {/* <h3>52W high?</h3>
        <p>number</p>
        <h3>52W Low?</h3>
        <p>number</p> */}
      </section>
      <button value={"BTC"} onClick={handleRender}>
        handleBTC
      </button>
      <button value={"GRT"} onClick={handleRender}>
        handleGRT
      </button>
      <button value={"DOT"} onClick={handleRender}>
        handleDOT
      </button>
    </div>
  );
};
export default Coin;

Coin.propTypes = {
  ticker: PropTypes.string,
};
