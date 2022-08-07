import "./NavBar.css";
import { Link } from "react-router-dom";
import { favorites } from "../../utils";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <h1 className="title">Alt-Coinsters</h1>
      </Link>
      <Link to="/watchlist">
        {<button className="watchlist">View Watchlist</button>}{" "}
      </Link>
    </div>
  );
};

export default NavBar;
