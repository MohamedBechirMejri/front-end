import "./Styles/Game.scss";

const Game = (props) => {
  return (
    <div
      className="game"
      style={{
        backgroundImage: `url(${props.game.image})`,
      }}
    >
      <h3 className="game-title">{props.game.title}</h3>
    </div>
  );
};
export default Game;
