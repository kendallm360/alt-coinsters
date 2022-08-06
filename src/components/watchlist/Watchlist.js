import "./Watchlist.css";
import React from "react";
import { favorites } from "../../utils";
import { Link } from "react-router-dom";

const Watchlist = () => {
  //   console.log("workinf?");
  console.log(favorites);
  return (
    <>
      {favorites.map((fave) => {
        return (
          // {`/coin/${ticker}`}
          <div className="watchlist">
            <img className="coin-logo" src={fave.coinInfo.img} />
            <Link to={`/coin/${fave.coinInfo.ticker}`}>
              <h2>{fave.coinInfo.crypto}</h2>
            </Link>
            <p>Last close: {fave.lastClose}</p>
            <p>52W High: {fave.yearHigh}</p>
            <p>52W Low: {fave.yearLow}</p>
          </div>
        );
      })}
    </>
  );
};
//logo, coin, 52 week low, 52w high, last close,
export default Watchlist;
