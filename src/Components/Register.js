import { Component } from "react";
import Input from "./SubComponents/Input";
import Button from "./SubComponents/Button";
class Register extends Component {
  render() {
    return (
      <div className="register">
        <h2>Create a new account</h2>
        <div className="oauth-buttons">
          <Button ButtonName="continue with Discord" OnClick />
          <Button ButtonName="continue with Google" OnClick />
          <Button ButtonName="continue with Facebook" OnClick />
          <Button ButtonName="continue with Twitter" OnClick />
        </div>
        <div className="or">
          <hr />
          <h3>OR</h3>
          <hr />
        </div>
        <h2>Subscribe with email</h2>
        <Button ButtonName="continue with  Email" OnClick />
        <form>
          <Input Name="username" Placeholder="Username" Type="text" OnChange />
          <Input Name="email" Placeholder="Email" Type="email" OnChange />
          <Input
            Name="password"
            Placeholder="Password"
            Type="password"
            OnChange
          />
          <Input
            Name="password-confirm"
            Placeholder="Confirm Password"
            Type="password"
            OnChange
          />
          <Input Name="age" Placeholder="Age" Type="checkbox" OnChange />
          <Input Name="terms" Placeholder="Terms" Type="checkbox" OnChange />
          <Input
            Name="kip"
            Placeholder="Kimo is Pedo"
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
