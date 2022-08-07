import "./Error.css";
import { Link } from "react-router-dom";
import brokenCoin from "../../images/brokenCoin.jpeg";
const Error = () => {
  return (
    <div className="errorDiv">
      <Link to={"/error"}></Link>
      <img
        className="errorImage"
        src={brokenCoin}
        alt="Picture of a drunk guy to show the site is down"
      />
      <h2 className="errorMessage">
        APIs "aint" free and I am not paying for them. Let the site cool off for
        a minute before searching again
      </h2>
    </div>
  );
};

export default Error;
