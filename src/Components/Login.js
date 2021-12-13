import { Component } from "react/cjs/react.production.min";
import OAuthButtons from "./Register-Login/OAuthButtons";
import Or from "./Register-Login/Or";
import Input from "./SubComponents/Input";
import Button from "./SubComponents/Button";
import "../Styles/login.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="login">
        <h2>Login With</h2>
        <h3>your FightMe.tn account</h3>
        <form>
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
