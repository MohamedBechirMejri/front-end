import { Component } from "react";
import "../Styles/register.scss";
import Input from "./SubComponents/Input";
import Button from "./SubComponents/Button";

class Register extends Component {
  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.state = {
      isFormHidden: true,
    };
  }
  showForm() {
    this.setState({
      isFormHidden: false,
    });
  }
  render() {
    return (
      <div className="register">
        <h1>FightMe.tn</h1>
        <h2>Create a new account</h2>
        <div className="oauth-buttons">
          <Button
            ButtonName="continue with Discord"
            OnClick
            ClassName="discord-button"
            Icon="bi-discord"
          />

          <Button
            ButtonName="continue with Google"
            OnClick
            ClassName="google-button"
            Icon="bi-google"
          />
          <Button
            ButtonName="continue with Facebook"
            OnClick
            ClassName="facebook-button"
            Icon="bi-facebook"
          />
          <Button
            ButtonName="continue with Twitter"
            OnClick
            ClassName="twitter-button"
            Icon="bi-twitter"
          />
        </div>
        <div className="or">
          <hr />
          <h3>OR</h3>
          <hr />
        </div>
        <h2>Subscribe with email</h2>
        <Button ButtonName="continue with  Email" OnClick={this.showForm} />
        <form className={this.state.isFormHidden && "hidden"}>
          <Input Name="username" Placeholder="Username" Type="text" OnChange />
          <Input Name="email" Placeholder="Email" Type="email" OnChange />
          <Input
            Name="password"
            Placeholder="Password"
            Type="password"
            OnChange
          />
          <Input
            Name="terms"
            Placeholder="You agree to our Terms"
            Type="checkbox"
            OnChange
          />

          <Button ButtonName="Join Now" OnClick />
        </form>
      </div>
    );
  }
}
export default Register;
