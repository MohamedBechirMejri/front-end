import { Component } from "react/cjs/react.production.min";
import Button from "../SubComponents/Button";
import "../../Styles/oauthButtons.scss";

class OAuthButtons extends Component {
  render() {
    return (
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
    );
  }
}
export default OAuthButtons;
