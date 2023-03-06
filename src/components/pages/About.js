import Footer from "../Footer";
import couplesTherapy from "../../assets/pexels-antoni-shkraba-5217833.jpg";

function About() {
  return (
    <div className="About">
      <div className="container">
        <header className="about-header">
          <img src={couplesTherapy} alt="Couple doing therapy" className="about-header-img"/>
          <div className="about-header-content">
            <h1 className="about-header-title">Welcome to Wayy Health</h1>
            <p className="about-header-text">
              We are a mental health care facility focused on creating comunity by
              bringing healing and joy to people struggling with mental health
            </p>
          </div>
        </header>
      <Footer />
      </div>
    </div>
  );
}

export default About;
