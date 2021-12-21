import uniqid from "uniqid";
import Tournament from './Tournament';

const Tournaments = (props) => {
  return (
    <div>
      <div className="flex-col gap-4 m-4 select-none">
        <h3 className="text-lg font-extrabold">Tournaments</h3>
        <div className="flex max-w-full gap-4 py-4 my-4 overflow-x-scroll justify-evenly h-max">
          {props.Tournaments.map((tournament) => (
            <Tournament key={uniqid()} tournament={tournament} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tournaments;
