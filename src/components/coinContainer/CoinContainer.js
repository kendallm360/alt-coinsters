import { useEffect, useState } from "react";
import { fetchCoin } from "../../apiCalls";
import "./CoinContainer.css";

const CoinContainer = () => {
  const [coinList, setCoinList] = useState([]);
  const marketMovers = ["BTC", "ETH"]; //"USDT", "USDC", "XRP"
  const topFifteen = ["ADA", "UNI", "XLM", "SOL", "GRT"]; // "DOGE", "DOT",

  useEffect(() => {});

  let test = marketMovers.forEach((coin) => {
    fetchCoin(coin).then((data) => {
      //   console.log(data.ticker);
      setCoinList(data.results);
      //   coinList.push(data);
    });
    console.log(coinList);
  });

  return (
    <div className="coin-container">
      Description of tab view
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default CoinContainer;
