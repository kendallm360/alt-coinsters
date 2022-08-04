import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link to="/">
      <h1 className="nav-bar">Alt-Coinsters</h1>
    </Link>
  );
};

export default NavBar;
