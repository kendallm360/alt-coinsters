import "./Coin.css";

const Coin = () => {
  // const []

  return (
    <div className="coin-wrapper">
      <header className="coin-header">
        {/* <img src="" /> */}
        <h2>Coin Name</h2>
        <h3>Ticker</h3>
        <button className="favorite">Favorite</button>
      </header>
      <div className="chart">
        <p>maybe?</p>
      </div>
      <aside className="coin-details">
        <h3>Market Cap</h3>
        <p>number</p>
        <h3>Volume</h3>
        <p>number</p>
        <h3>Today's Close</h3>
        <p>number</p>
        <h3>52W high?</h3>
        <p>number</p>
        <h3>52W Low?</h3>
        <p>number</p>
      </aside>
    </div>
  );
};
export default Coin;
