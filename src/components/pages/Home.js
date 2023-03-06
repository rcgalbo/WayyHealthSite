import { Link } from "react-router-dom";
import Footer from "../Footer"
import therapy from "../../assets/pexels-polina-tankilevitch-5234582.jpg";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <header>
          <div className="home-content">
            <h1 className="wayy-title">
              <span className="wayy-span">Wayy</span> better mental health care
            </h1>
            <p className="wayy-description">
              Access high quality therapy for as little as $60 per month
            </p>
            <Link className="nav-link" to="sign-up">
              <button className="sign-up-button">Sign Up</button>
            </Link>
          </div>
          <img
            src={therapy}
            alt="Two people doing therapy"
            className="home-img"
          />
        </header>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
