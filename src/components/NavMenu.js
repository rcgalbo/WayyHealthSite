import { Link } from "react-router-dom";

function NavMenu(props) {

  return (
    <div className={props.navbarOpen ? "show-menu" : "menu-nav"}>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="sign-up">
        <button className="sign-up-button">Sign Up</button>
      </Link>
    </div>
  );
}

export default NavMenu;
