import { Link } from "react-router-dom";
import { GiPaperPlane, GiStairsGoal, GiLaddersPlatform } from "react-icons/gi";
import Footer from "../Footer";
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
              Access to high quality therapy for as little as $60 per month
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
        <div className="home-details">
          <div className="detail-card our-approach">
            <h2>
              <GiPaperPlane className="home-details-icon" />
              Our approach
            </h2>
            <div className="detail-card-text">
              <p>Provide support by meeting people where they are</p>
            </div>
          </div>
          <div className="detail-card out-platform">
            <h2>
              <GiLaddersPlatform className="home-details-icon" />
              Our platform
            </h2>
            <div className="detail-card-text">
              <p>
                Allow individuals to subscribe to our community for access to
                practitioners, community wellness events and experiences that
                increase joy
              </p>
            </div>
          </div>
          <div className="detail-card our-goal">
            <h2>
              <GiStairsGoal className="home-details-icon" />
              Our goal
            </h2>
            <div className="detail-card-text">
              <p>
                To provide access to high quality mental health care with a focus
                on community at affordable prices
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
