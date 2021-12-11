import { Component } from "react";
import "../Styles/register.scss";
import Input from "./SubComponents/Input";
import Button from "./SubComponents/Button";
import OAuthButtons from "./Register-Login/OAuthButtons";
import Or from "./Register-Login/Or";

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
        <OAuthButtons />
        <Or />
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
          <Button ButtonName="Join Now" OnClick />{" "}
          <p>
            Already have an account ? <a href="/login">Login</a> instead!
          </p>
        </form>
      </div>
    );
  }
}
export default Register;
