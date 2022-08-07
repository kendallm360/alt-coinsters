import "./Watchlist.css";
import React from "react";
import { favorites } from "../../utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import Coin from "../coin/Coin";
import { tickers } from "../../utils";

const Watchlist = () => {
  const [ticker, setTicker] = useState("");

  const handleSubmit = () => {
    <Coin ticker={ticker} />;
  };

  const handleTickerSelect = (event) => {
    setTicker(event.target.value);
  };

  return (
    <div className="watchlist-page">
      {favorites.length < 1 ? (
        <div>
          <select value={ticker} name={ticker} onChange={handleTickerSelect}>
            <option>---Top Altcoins---</option>
            {tickers.map((stock) => {
              return (
                <option key={Date.now() + stock.ticker} value={stock.ticker}>
                  {stock.crypto}
                </option>
              );
            })}
          </select>
          <Link to={`/coin/${ticker}`}>
            {ticker && (
              <button className="search-coin" onClick={handleSubmit}>
                Search
              </button>
            )}
          </Link>
          <h2>YOU HAVE NOT ADDED ANY COINS TO YOUR WATCHLIST YET</h2>
        </div>
      ) : (
        favorites.map((fave) => {
          return (
            <div className="watchlist-items">
              {/* <p className="key">key={Date.now() + fave}</p> */}
              <img className="coin-logo" src={fave.coinInfo.img} />
              <Link to={`/coin/${fave.coinInfo.ticker}`}>
                <h2>{fave.coinInfo.crypto}</h2>
              </Link>
              <p>Last close: {fave.lastClose}</p>
              <p>52W High: {fave.yearHigh}</p>
              <p>52W Low: {fave.yearLow}</p>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Watchlist;
