import { useEffect, useState } from "react";
import { fetchCoinPreviousDay } from "../../apiCalls";
import { assignName } from "../../helperFunctions";
import "./CoinContainer.css";
import Coin from "../coin/Coin";

const CoinContainer = () => {
  const [ticker, setTicker] = useState("");
  const [coinName, setCoinName] = useState("");
  const [submitted, setSubmitted] = useState(true);

  const [coin, setCoin] = useState([]);
  const [symbol, setSymbol] = useState("");

  // useEffect(() => {
  //   fetchCoinPreviousDay("ETH").then((data) => {
  //     setCoinName(assignName("ETH"));
  //     setCoin(data.results[0]);
  //     setSymbol(data.results[0].T.split("USD").join("").split("X:")[1]);
  //   });
  // }, []);

  const handleSubmit = () => {
    setSubmitted(false);
  };

  const handleTickerSelect = (event) => {
    setTicker(event.target.value);
  };

  return submitted ? (
    <div className="coin-container">
      <div className="tab-selector">
        <select value={ticker} name={ticker} onChange={handleTickerSelect}>
          <option>--Choose A Top Alt--</option>
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
        <button onClick={handleSubmit}>Try?</button>
      </div>
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
    </div>
  ) : (
    <Coin ticker={ticker} />
  );
};

export default CoinContainer;
