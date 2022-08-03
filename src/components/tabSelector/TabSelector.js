import { useState } from "react";
import "./TabSelector.css";
import Coin from "../coin/Coin";

const TabSelector = () => {
  const [ticker, setTicker] = useState("");
  // const handlePageView = () => {};

  const handleTickerSelect = (event) => {
    // const { name, value } = event.target;
    setTicker(event.target.value);
  };

  return (
    <div className="tabs">
      <select
        className="tab-selector"
        value={ticker}
        name={ticker}
        onChange={handleTickerSelect}
      >
        market-movers-tab
        <option>--Choose a top 15--</option>
        <option value={"BTC"}>Bitcoin</option>
        <option value={"ETH"}>Ethereum</option>
      </select>
      {/* <button className="tab-selector" onClick={handlePageView()}>
        top-fifteen-tab
      </button>
      <button className="tab-selector" onClick={handlePageView()}>
        favorites-tab
      </button> */}
      <Coin />
    </div>
  );
};

export default TabSelector;
