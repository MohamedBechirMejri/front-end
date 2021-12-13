import { Component } from "react";
import "../Styles/register.scss";
import Input from "./SubComponents/Input";
import Button from "./SubComponents/Button";
import OAuthButtons from "./Register-Login/OAuthButtons";
import Or from "./Register-Login/Or";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.changeUsernameInput = this.changeUsernameInput.bind(this);
    this.changeEmailInput = this.changeEmailInput.bind(this);
    this.changePasswordInput = this.changePasswordInput.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      isFormHidden: true,
      usernameInput: "",
      emailInput: "",
      passwordInput: "",
    };
  }

  showForm() {
    this.setState({
      isFormHidden: false,
    });
  }

  changeUsernameInput(e) {
    this.setState({
      usernameInput: e.target.value,
    });
  }
  changeEmailInput(e) {
    this.setState({
      emailInput: e.target.value,
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
      email: this.state.emailInput,
      password: this.state.passwordInput,
      serverMessage: "",
    });

    const config = {
      method: "post",
      url: "https://aqueous-falls-70675.herokuapp.com/api/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        this.setState({
          serverMessage: res.data.message,
          // TODO: show message on error
        });
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  }

  render() {
    return (
      <div className="register">
        <h1>FightMe.tn</h1>
        <h2>Create a new account</h2>
        <OAuthButtons />
        <Or />
        <h2>Subscribe with email</h2>
        <Button
          ButtonName="continue with  Email"
          OnClick={this.showForm}
          ClassName={!this.state.isFormHidden ? "hidden" : ""}
        />
        <form className={this.state.isFormHidden ? "hidden" : ""}>
          <Input
            Name="username"
            Placeholder="Username"
            Type="text"
            OnChange={this.changeUsernameInput}
          />
          <Input
            Name="email"
            Placeholder="Email"
            Type="email"
            OnChange={this.changeEmailInput}
          />
          <Input
            Name="password"
            Placeholder="Password"
            Type="password"
            OnChange={this.changePasswordInput}
          />
          <Input
            Name="terms"
            Placeholder="You agree to our Terms"
            Type="checkbox"
          />
          <Button ButtonName="Join Now" OnClick={this.submitForm} />
          <p className="message">{this.state.serverMessage}</p>
          <p>
            Already have an account ? <a href="/login">Login</a> instead!
          </p>
        </form>
      </div>
    );
  }
}
export default Register;
