import { Component } from "react";
import "../Styles/register.scss";
import Input from "./SubComponents/Input";
import Button from "./SubComponents/Button";
import OAuthButtons from "./Register-Login/OAuthButtons";
import Or from "./Register-Login/Or";
import axios from "axios";
import Verify from "./Verify";
import { Loading } from "notiflix";
import toast from "react-hot-toast";

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
      isFormButtonHidden: false,
      usernameInput: "",
      emailInput: "",
      passwordInput: "",
      serverMessage: "",
      isStillResgistering: true,
    };
  }

  showForm() {
    this.setState({
      isFormHidden: false,
      isFormButtonHidden: true,
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
  async submitForm(e) {
    Loading.standard("One Sec...");
    const data = JSON.stringify({
      username: this.state.usernameInput,
      email: this.state.emailInput,
      password: this.state.passwordInput,
    });

    const config = {
      method: "post",
      url: "https://aqueous-falls-70675.herokuapp.com/api/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    toast.promise(axios(config), {
      loading: "Registering...",
      success: (res) => {
        this.setState({ isStillResgistering: false });
        Loading.remove();
        return <b>{res.data.message}!</b>;
      },
      error: (err) => {
        Loading.remove();
        console.log(err.response);
       return <b>{err.response.data.errors[0].msg}.</b>
      },
    });
    e.preventDefault();
  }

  render() {
    return this.state.isStillResgistering ? (
      <div className="register">
        <h1>FightMe.tn</h1>
        <h2>Create a new account</h2>
        <OAuthButtons />
        <Or />
        <h2>Subscribe with email</h2>
        <Button
          ButtonName="continue with  Email"
          OnClick={this.showForm}
          ClassName={this.state.isFormButtonHidden ? "hidden" : ""}
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
    ) : (
      <Verify
        Username={this.state.usernameInput}
        Email={this.state.emailInput}
      />
    );
  }
}
export default Register;
