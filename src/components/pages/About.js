import Footer from "../Footer";
import couplesTherapy from "../../assets/pexels-antoni-shkraba-5217833.jpg";

function About() {
  return (
    <div className="About">
      <div className="container">
        <header className="about-header">
          <img
            src={couplesTherapy}
            alt="Couple doing therapy"
            className="about-header-img"
          />
          <div className="about-header-content">
            <h1 className="about-header-title">
              Welcome to <span className="about-wayy-health">Wayy Health</span>
            </h1>
            <p className="about-header-text">
              A mental health care provider focused on creating comunity by
              bringing healing and joy to people struggling with mental health
            </p>
          </div>
        </header>
        <div className="about-content">
          <div className="about-content-mission">
            <h2>Mission</h2>
            <p>
              Wayy Health is a platform connecting individuals with resources to
              improve community mental health
            </p>
            <p>
              Founded in 2019 the Wayy Health platform is designed for people to
              acess therapy sessions, community wellness activities and events
              that support mental health
            </p>
          </div>
          <h2 className="about-content-activities-title">
            Wayy Health activities
          </h2>
          <div className="about-content-activities">
            <ul>
              <li>Sign up for therapy</li>
              <li>Volunteer hours as a practitioner</li>
              <li>Find wellnes activities</li>
            </ul>
            <ul>
              <li>Find fun events</li>
              <li>Share your activities in the community</li>
              <li>
                Access digital content about topics in mental health and
                self-care
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
