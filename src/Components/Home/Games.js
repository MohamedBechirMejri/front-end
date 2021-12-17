import Game from "./Game";
import uniqid from "uniqid";
import "../../Styles/Games.scss";
const Games = (props) => {
  return (
    <div className="games-section">
      {props.Games.map((game) => (
        <Game key={uniqid()} game={game} />
      ))}
    </div>
  );
};
export default Games;
