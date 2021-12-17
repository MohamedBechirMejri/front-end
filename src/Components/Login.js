import { Component } from "react/cjs/react.production.min";
import OAuthButtons from "./Register-Login/OAuthButtons";
import Or from "./Register-Login/Or";
import Input from "./SubComponents/Input";
import Button from "./SubComponents/Button";
import "../Styles/login.scss";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Loading } from "notiflix";
import Verify from "./Verify";

// TODO: Implement loading screen app wide after completely switching to hooks

class Login extends Component {
  constructor(props) {
    super(props);

    this.changeUsernameInput = this.changeUsernameInput.bind(this);
    this.changePasswordInput = this.changePasswordInput.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      usernameInput: "",
      passwordInput: "",
      isVerified: true,
      userData: {},
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
    Loading.standard("One Sec...");
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

    toast.promise(axios(config), {
      loading: "Logging you in...",
      success: (res) => {
        Loading.remove();
        this.props.SetToken(res.data.token);
        this.props.GrabUser();
        return <b>{"Welcome" + res.data.user.username}!</b>;
      },
      error: (err) => {
        if (err.response.status === 406) {
          Loading.remove();
          this.setState({
            isVerified: false,
            userData: err.response.data.user,
          });

          console.log(err.response);
        }
        return <b>{err.response.data.msg}.</b>;
      },
    });

    e.preventDefault();
  }
  render() {
    return this.state.isVerified ? (
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
    ) : (
      <Verify
        Username={this.state.userData.username}
        Email={this.state.userData.email}
        Id={this.state.userData.id}
      />
    );
  }
}
export default Login;
