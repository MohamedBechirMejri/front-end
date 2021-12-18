// import Button from "./SubComponents/Button";
// import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import "./Home/Styles/Home.scss";
import Games from "./Home/Games";
import Slider from "./Home/Slider";
import Tournaments from "./Home/Tournaments";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Slider />
        <Games
          Games={[
            {
              image:
                "https://umg-uploads.s3.us-east-2.amazonaws.com/uploads/system/games/266e548a254082fa1c77625223e64440.png",
              title: "League of Legends",
            },
            {
              image:
                "https://umg-uploads.s3.us-east-2.amazonaws.com/uploads/system/games/266e548a254082fa1c77625223e64440.png",
              title: "League of Legends",
            },
            {
              image:
                "https://umg-uploads.s3.us-east-2.amazonaws.com/uploads/system/games/266e548a254082fa1c77625223e64440.png",
              title: "League of Legends",
            },
            {
              image:
                "https://umg-uploads.s3.us-east-2.amazonaws.com/uploads/system/games/266e548a254082fa1c77625223e64440.png",
              title: "League of Legends",
            },
            {
              image:
                "https://umg-uploads.s3.us-east-2.amazonaws.com/uploads/system/games/266e548a254082fa1c77625223e64440.png",
              title: "League of Legends",
            },
            {
              image:
                "https://umg-uploads.s3.us-east-2.amazonaws.com/uploads/system/games/266e548a254082fa1c77625223e64440.png",
              title: "League of Legends",
            },
            {
              image:
                "https://umg-uploads.s3.us-east-2.amazonaws.com/uploads/system/games/266e548a254082fa1c77625223e64440.png",
              title: "League of Legends",
            },
            {
              image:
                "https://umg-uploads.s3.us-east-2.amazonaws.com/uploads/system/games/266e548a254082fa1c77625223e64440.png",
              title: "League of Legends",
            },
          ]}
        />
        <Tournaments />

        {/* <i className="bi bi-cone-striped" />
        <h1>This Page is under Construction</h1>
        <div className="login-register-buttons">
          <Link to="register">{<Button ButtonName="Register" />}</Link>
          <Link to="login">{<Button ButtonName="Login" />}</Link>
        </div> */}
      </div>
    );
  }
}
export default Home;
