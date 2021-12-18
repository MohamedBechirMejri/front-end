import "../Styles/Header.scss";

const Header = () => {
  return (
    <header>
      <h1>FightMe.tn</h1>
      <div className="links">
        <a href="#">Dashboard</a>
        <a href="#">Tournaments</a>
        <a href="#">Teams</a>
      </div>
    </header>
  );
};

export default Header;
