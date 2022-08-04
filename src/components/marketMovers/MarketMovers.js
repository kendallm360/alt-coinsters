import "./MarketMovers.css";
import { useState } from "react";

const MarketMovers = () => {
  const [ticker, setTicker] = useState("");

  const handleTickerSelect = (event) => {
    setTicker(event.target.value);
  };

  return (
    <section className="market-movers">
      <div className="buttons">
        <select value={ticker} name={ticker} onChange={handleTickerSelect}>
          <option>--Choose A Market Mover--</option>
          <option value={"BTC"}>BITCOIN</option>
          <option value={"ETH"}>ETHEREUM</option>
          <option value={"USDT"}>TETHER</option>
          <option value={"USDC"}>USD COIN</option>
        </select>
      </div>
    </section>
  );
};

export default MarketMovers;
