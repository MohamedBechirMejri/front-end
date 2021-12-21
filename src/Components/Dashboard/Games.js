import uniqid from "uniqid";
import Game from "./Game"; 
const Games = (props) => {
  return (
    <div className="flex-col gap-4 m-4 select-none">
      <h3 className="text-lg font-extrabold">Top Games</h3>
      <div className="flex max-w-full gap-4 py-4 my-4 overflow-x-scroll justify-evenly h-max">
        {props.Games.map((game) => (
          <Game key={uniqid()} game={game} />
        ))}
      </div>
    </div>
  );
};
export default Games;
