import Button from "./SubComponents/Button";
import "../Styles/verify.scss";
import Input from "./SubComponents/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Styles/verify.scss";

const Verify = (props) => {
  const navigate = useNavigate();

  const [verificationInput, setVerificationInput] = useState(0);

  const changeVerificationInput = (e) => {
    setVerificationInput(e.target.value);
  };

  const submitVerificationCode = (e) => {
    const data = JSON.stringify({
      id: props.Id,
      username: props.Username,
      email: props.Email,
      ver_code: verificationInput,
    });

    const config = {
      method: "post",
      url: "https://aqueous-falls-70675.herokuapp.com/api/auth/verifyemail", // correct url later
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        console.log(res);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  };

  return (
    <div className={"verify"}>
      <h1>Hey, {props.Username}!</h1>
      <h2>Enter the code we sent to your email.</h2>
      <form>
        <Input
          Name="verification-code"
          OnChange={changeVerificationInput}
          Type="text"
          Placeholder="Verification Code"
          Class="verification-input"
          required
        />
        <Button ButtonName="Submit" OnClick={submitVerificationCode} />
      </form>
    </div>
  );
};
export default Verify;
