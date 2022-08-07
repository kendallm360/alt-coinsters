import "./CoinDetails.css";
import PropTypes from "prop-types";
import { assignDecimalPlaces } from "../../utils";

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
        <div className="volume">
          <h3>Previous Day's Volume</h3>
          <p className="previous-volume">{Math.round(coin.v)}</p>
        </div>
        <div className="high">
          <h3>Previous Day's High</h3>
          <p className="previous-high">${assignDecimalPlaces(coin.h)}</p>
        </div>
        <div className="low">
          <h3>Previous Day's Low</h3>
          <p className="previous-low">${assignDecimalPlaces(coin.l)}</p>
        </div>
        <div className="close">
          <h3>Previous Day's close</h3>
          <p className="previous-close">${assignDecimalPlaces(coin.c)}</p>
        </div>
        <div className="annual-high">
          <h3>52W high</h3>
          <p className="annual-high-value">
            ${assignDecimalPlaces(annualHigh)}
          </p>
        </div>
        <div className="annual-low">
          <h3>52W Low</h3>
          <p className="annual-low-value">${assignDecimalPlaces(annualLow)}</p>
        </div>
        <div className="annual-volume">
          <h3>52W Volume</h3>
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
  coin: PropTypes.object,
  coinData: PropTypes.object,
  annualHigh: PropTypes.number,
  annualLow: PropTypes.number,
  annualVolume: PropTypes.number,
};
