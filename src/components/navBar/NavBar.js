import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <h1 className="nav-bar">Alt-Coinsters</h1>
      </Link>
      <Link to="/watchlist">
        <button className="nav-bar">Watchlist</button>
      </Link>
    </div>
  );
};

export default NavBar;
