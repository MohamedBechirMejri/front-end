const Tournament = (props) => {
  return (
    <div
      className="flex flex-col items-end px-10 justify-center h-40 m-2 bg-[#161d33] rounded-lg w-80 hover:scale-110 transition-all"
      style={{
        backgroundImage: `url(${props.tournament.image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 className="game-title">{props.tournament.title}</h3>
      <h3 className="game-title">{props.tournament.date}</h3>
      <h3 className="game-title">{props.tournament.type}</h3>
    </div>
  );
};
export default Tournament;
