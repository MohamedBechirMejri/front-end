import { Component } from "react";
import "../Styles/register.scss";
import Input from "./SubComponents/Input";
import Button from "./SubComponents/Button";
// import Footer from "./Footer";
class Register extends Component {
  render() {
    return (
      <div className="register">
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
          <Input Name="terms" Placeholder="You agree to our Terms" Type="checkbox" OnChange />

          <Button ButtonName="Join Now" OnClick />
        </form>
        {/*   <Footer/> */}
      </div>
    );
  }
}
export default Register;
