import uniqid from "uniqid";
import Game from "./Game";
import './Styles/Games.scss';
const Games = (props) => {
  return (
    <div className="games">
      <h3 className="title">Top Games</h3>
      <div className="games-container">
        {props.Games.map((game) => (
          <Game key={uniqid()} game={game} />
        ))}
      </div>
    </div>
  );
};
export default Games;
