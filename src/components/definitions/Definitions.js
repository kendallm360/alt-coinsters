import "./Definitions.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { tickers } from "../../utils";
import Coin from "../coin/Coin";
// import

const Definitions = () => {
  const [ticker, setTicker] = useState("");
  //   const [submitted, setSubmitted] = useState(true);

  const handleSubmit = () => {
    // setSubmitted(false);
    <Coin ticker={ticker} />;
  };

  const handleTickerSelect = (event) => {
    setTicker(event.target.value);
  };

  return (
    <>
      <div className="tab-selector">
        <select value={ticker} name={ticker} onChange={handleTickerSelect}>
          <option>--Choose A Top Alt--</option>
          {tickers.map((stock) => {
            return <option value={stock.ticker}>{stock.crypto}</option>;
          })}
        </select>
        <Link to={`/coin/${ticker}`}>
          <button onClick={handleSubmit}>Try?</button>
        </Link>
      </div>
      <h2>HEy</h2>
      <p>
        Welcome to ALT-Coinsters, a safe place for learning about the ins and
        outs of alt-coins..specifically the good ones. If you are alreayd
        familiar with the crypto space feel free to look at some of my favorites
        here (.............)
      </p>
      <p>
        If not no worries, we got you covered by bringing you right where you
        need to be. Below you will see definitions of what all these words means
        and help teach you the things that are Important to know at surface
        level
      </p>
      <h2>For starters what is an Alt-coin even?</h2>
      <p>
        Altcoins are generally defined as all cryptocurrencies other than
        Bitcoin (BTC). However, some people consider altcoins to be all
        crytocurrencies other than Bitcoin and Ethereum (ETH) because most
        cryptocurrencies are forked from one of the two. Some altcoins use
        different consensus mechanisms to validate transactions and open new
        blocks, or attempt to distinguish themselves from Bitcoin and Ethereum
        by providing new or additional capabilities or purposes. Most altcoins
        are designed and released by developers who have a different vision or
        use for their tokens or cryptocurrency. Learn more about altcoins and
        what makes them different from Bitcoin.
      </p>
    </>
  );
};
export default Definitions;
