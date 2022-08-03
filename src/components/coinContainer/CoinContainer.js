import { useEffect, useState } from "react";
import { fetchCoin } from "../../apiCalls";
import "./CoinContainer.css";
import Coin from "../coin/Coin";

const CoinContainer = () => {
  const [coinList, setCoinList] = useState([]);
  // const marketMovers = ["BTC", "ETH"]; //"USDT", "USDC", "XRP"
  const topFifteen = ["GRT"]; // "DOGE", "DOT", "ADA", "UNI", "XLM", "SOL"

  // useEffect(() => {});

  return (
    <div className="coin-container">
      Description of tab view
      <Coin />
    </div>
  );
};

export default CoinContainer;
