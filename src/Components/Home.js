import "./Home/Styles/Home.scss";
import Games from "./Home/Games";
import Slider from "./Home/Slider";
import Tournaments from "./Home/Tournaments";

const Home = () => {
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
    </div>
  );
};

export default Home;
