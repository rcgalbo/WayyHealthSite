import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/wayy.png";

function Navigation() {
  return (
    <div className="Navigation">
      <nav className="nav-bar">
        <Link to="/">
          <img className="nav-logo" src={Logo} alt="Logo" />
        </Link>
        <Link className="title-link" to="/">
          <h1 className="nav-title">Wayy Health</h1>
        </Link>
        <div className="right-align">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link about-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="sign-up">
            <button className="sign-up-button">Sign Up</button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;
