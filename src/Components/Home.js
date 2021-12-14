import Button from "./SubComponents/Button";
import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import "../Styles/home.scss";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <i className="bi bi-cone-striped" />
        <h1>This Page is under Construction</h1>
        <div className="login-register-buttons">
          <Link to="register">{<Button ButtonName="Register" />}</Link>
          <Link to="login">{<Button ButtonName="Login" />}</Link>
        </div>
      </div>
    );
  }
}
export default Home;
