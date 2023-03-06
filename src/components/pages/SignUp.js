import Form from "../Form";
import happytherapy from "../../assets/pexels-cottonbro-studio-4101137.jpg";

function SignUp() {
  return (
    <div className="SignUp">
      <div className="container">
        <img
          src={happytherapy}
          alt="Therapist and patient laughing"
          className="sign-up-img"
        />
        <Form />
      </div>
    </div>
  );
}

export default SignUp;
