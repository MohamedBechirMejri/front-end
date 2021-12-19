import "../../Styles/Header/Login.scss";
import Button from "../SubComponents/Button";

const Login = () => {
  return (
    <div className="login">
      <h1>Login With</h1>
      <div className="social-media">
        <Button
          ButtonName="Discord"
          OnClick={() => console.log("hi")}
          ClassName="discord-button"
          Icon="bi-discord"
        />
        <Button
          ButtonName="Google"
          OnClick={() => console.log("hi")}
          ClassName="google-button"
          Icon="bi-google"
        />
        <Button
          ButtonName="Facebook"
          OnClick={() => console.log("hi")}
          ClassName="facebook-button"
          Icon="bi-facebook"
        />
      </div>
    </div>
  );
};
export default Login;
