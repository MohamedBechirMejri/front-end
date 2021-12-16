import Button from "./SubComponents/Button";
import { Component } from "react/cjs/react.production.min";
import "../Styles/verify.scss";
import Input from "./SubComponents/Input";
import axios from "axios";

class Verify extends Component {
  constructor(props) {
    super(props);
    this.changeVerificationInput = this.changeVerificationInput.bind(this);
    this.submitVerificationCode = this.submitVerificationCode.bind(this);
    this.state = { verificationInput: "" };
  }
  changeVerificationInput(e) {
    this.setState({ verificationInput: e.target.value });
  }
  submitVerificationCode(e) {
    const data = JSON.stringify({
      username: this.props.Username,
      email: this.props.Email,
      ver_code: this.state.verificationInput,
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
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  }
  render() {
    return (
      <div className={"verify " + (this.props.Shown ? "" : "hidden")}>
        <h2>Enter the code we sent to your email</h2>
        <form>
          <Input
            Name="verification-code"
            OnChange={this.changeVerificationInput}
            Type="text"
            Placeholder="Verification Code"
            Class="verification-input"
            required
          />
          <Button ButtonName="Submit" OnClick={this.submitVerificationCode} />
        </form>
      </div>
    );
  }
}
export default Verify;
