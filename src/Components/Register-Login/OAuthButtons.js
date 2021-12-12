import { Component } from "react/cjs/react.production.min";
import Button from "../SubComponents/Button";
import "../../Styles/oauthButtons.scss";

class OAuthButtons extends Component {
  render() {
    return (
      <div className="oauth-buttons">
        <Button
          ButtonName="continue with Discord"
          OnClick={() => console.log("hi")}
          ClassName="discord-button"
          Icon="bi-discord"
        />

        <Button
          ButtonName="continue with Google"
          OnClick={() => console.log("hi")}
          ClassName="google-button"
          Icon="bi-google"
        />
        <Button
          ButtonName="continue with Facebook"
          OnClick={() => console.log("hi")}
          ClassName="facebook-button"
          Icon="bi-facebook"
        />
        <Button
          ButtonName="continue with Twitter"
          OnClick={() => console.log("hi")}
          ClassName="twitter-button"
          Icon="bi-twitter"
        />
      </div>
    );
  }
}
export default OAuthButtons;
