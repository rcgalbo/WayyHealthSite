import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import NavMenu from "./NavMenu";
import Logo from "../assets/wayy.png";

function Navigation() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="Navigation">
      <nav className="nav-bar">
        <Link to="/">
          <img className="nav-logo" src={Logo} alt="Logo" />
        </Link>
        <Link className="title-link" to="/">
          <h1 className="nav-title">Wayy Health</h1>
        </Link>
        <button
          className="toggle-button"
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          {navbarOpen ? <MdClose /> : <CiMenuBurger />}
        </button>
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
      <NavMenu navbarOpen={navbarOpen} />
      <Outlet />
    </div>
  );
}

export default Navigation;
