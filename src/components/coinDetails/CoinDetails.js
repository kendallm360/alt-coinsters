import "./CoinDetails.css";
import PropTypes from "prop-types";

const CoinDetails = ({
  coin,
  annualHigh,
  annualLow,
  annualVolume,
  coinData,
}) => {
  return (
    <>
      <section className="coin-details">
        {/* <h3>Market Cap</h3>
    <p>number</p> */}
        <div className="volume">
          <h3>Previous Day's Volume</h3>
          <p className="previous-volume">{Math.round(coin.v)}...people</p>
        </div>
        <div className="high">
          <h3>Previous Day's High</h3>
          <p className="previous-high">${coin.h}</p>
        </div>
        <div className="low">
          <h3>Previous Day's Low</h3>
          <p className="previous-low">${coin.l}</p>
        </div>
        <div className="close">
          <h3>Previous Day's close</h3>
          <p className="previous-close">${coin.c}</p>
        </div>
        <div className="annual-high">
          <h3>52W high?</h3>
          <p className="annual-high-value">{annualHigh}</p>
        </div>
        <div className="annual-low">
          <h3>52W Low?</h3>
          <p className="annual-low-value">{annualLow}</p>
        </div>
        <div className="annual-volume">
          <h3>52W Volume?</h3>
          <p className="annual-volume-value">{Math.round(annualVolume)}</p>
        </div>
      </section>
      <section className="about">
        <h2>About {coinData.crypto}</h2>
        <h3>{coinData.description}</h3>
      </section>
    </>
  );
};

export default CoinDetails;

CoinDetails.propTypes = {
  coin: PropTypes.any,
  coinData: PropTypes.any,
  annualHigh: PropTypes.number,
  annualLow: PropTypes.number,
  annualVolume: PropTypes.number,
};
