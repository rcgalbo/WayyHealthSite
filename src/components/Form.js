import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const body = { Name: name, Email: email, Phone: phone }
    axios
      .post(
        "https://sheet.best/api/sheets/750d8c45-b3e7-460c-a275-6d100709fa7c",
        body
      )
      .then((response) => console.log(response));
    navigate('/thank-you')
    e.preventDefault();
  };

  return (
    <div className="Form">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h3 className="field-name">Name</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h3 className="field-name">Email</h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3 className="field-name">Phone Number </h3>
        <input
          type="number"
          name="phonenumber"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="form-button-container">
          <button className="form-submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
