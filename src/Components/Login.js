import { Component } from "react/cjs/react.production.min";
import OAuthButtons from "./Register-Login/OAuthButtons";
import Or from "./Register-Login/Or";
import Input from "./SubComponents/Input";
import Button from "./SubComponents/Button";
import "../Styles/login.scss";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.changeUsernameInput = this.changeUsernameInput.bind(this);
    this.changePasswordInput = this.changePasswordInput.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      usernameInput: "",
      passwordInput: "",
      serverMessage: "",
    };
  }

  changeUsernameInput(e) {
    this.setState({
      usernameInput: e.target.value,
    });
  }
  changePasswordInput(e) {
    this.setState({
      passwordInput: e.target.value,
    });
  }
  submitForm(e) {
    const data = JSON.stringify({
      username: this.state.usernameInput,
      password: this.state.passwordInput,
    });

    const config = {
      method: "post",
      url: "https://aqueous-falls-70675.herokuapp.com/api/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        console.log(res);
        this.setState({
          serverMessage: "", //res.data.message,
          // TODO: show message on error
          // TODO: redirect to /protected
          // TODO: fix error
        });
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  }
  render() {
    return (
      <div className="login">
        <h1>Login With</h1>
        <h3>your FightMe.tn account</h3>
        <form>
          <Input
            Name="username"
            Placeholder="Username"
            Type="text"
            OnChange={this.changeUsernameInput}
          />
          <Input
            Name="password"
            Placeholder="Password"
            Type="password"
            OnChange={this.changePasswordInput}
          />
          <Input
            Name="nosession"
            Placeholder="Stay logged in"
            Type="checkbox"
          />
          <Button ButtonName="Login" OnClick={this.submitForm} />
          <p className="message">{this.state.serverMessage}</p>
          <p>
            <a href="/register">Not a member yet?</a>
          </p>
        </form>
        <Or />
        <OAuthButtons />
      </div>
    );
  }
}
export default Login;
