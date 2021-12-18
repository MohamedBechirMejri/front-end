import "../Styles/UserBubble.scss";

const UserBubble = () => {
  return (
    <div
      className="user-bubble"
      style={{
        backgroundImage: `url(https://picsum.photos/200/300)`,
      }}
    >
      <div>
        <img src="../Assets/xp.png" alt="xp" />
        <h3>Username</h3>
      </div>

      <nav>
        <a to="/">Profile</a>
        <a to="/">Settings</a>
        <a to="/">Logout</a>
      </nav>
    </div>
  );
};

export default UserBubble;
