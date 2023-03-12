import logo from "../../assets/wayy.png";

function ThankYou() {
  return (
    <div className="ThankYou">
      <div className="container">
        <div className="content">
          <img src={logo} alt="Wayy Health Logo" />
          <h1>Thank You!</h1>
          <h3>A team member will reach out to you shortly to schedule your appointment</h3>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
