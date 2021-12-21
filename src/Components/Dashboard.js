// import Games from "./Home/Games";
import Carousel from "./Dashboard/Carousel";
import Games from "./Dashboard/Games";
import Tournaments from "./Dashboard/Tournaments";

const Dashboard = () => {
  return (
    <div className="h-screen dashboard">
      <Carousel />
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
      <Tournaments
        Tournaments={[
          {
            image:
              "https://umg-uploads.s3.us-east-2.amazonaws.com/uploads/system/games/266e548a254082fa1c77625223e64440.png",
            title: "League of Legends",
            date: "Today, at 16:00",
            type: "2v2",
          },
          {
            image:
              "https://umg-uploads.s3.us-east-2.amazonaws.com/uploads/system/games/266e548a254082fa1c77625223e64440.png",
            title: "League of Legends",
            date: "Today, at 16:00",
            type: "2v2",
          },
          {
            image:
              "https://umg-uploads.s3.us-east-2.amazonaws.com/uploads/system/games/266e548a254082fa1c77625223e64440.png",
            title: "League of Legends",
            date: "Today, at 16:00",
            type: "2v2",
          },
          {
            image:
              "https://umg-uploads.s3.us-east-2.amazonaws.com/uploads/system/games/266e548a254082fa1c77625223e64440.png",
            title: "League of Legends",
            date: "Today, at 16:00",
            type: "2v2",
          },
        ]}
      />
    </div>
  );
};
export default Dashboard;
