import axios from "axios";
import "../Styles/UserBubble.scss";

const logout= async()=> {
   
 
  axios.get("http://localhost:3030/logout", { withCredentials: true }).then(res => {
   if (res.data === "loggedout") {
     window.location.href="/";
     localStorage.removeItem('user');
     console.log("logged out");
   }
 })

};

const UserBubble = (props) => {
console.log(props);
  return (
    <div
      className="user-bubble"
      style={{
        backgroundImage: `url(`+ props.user.picture +`)`,
      }}
    >
      <div  style={{
        backgroundImage: `url(`+ props.user.picture  +`)`,
      }}>
        <img src="../Assets/xp.png" alt="xp" />
        <h3>{props.user.email} </h3>
      </div>

      <nav>
        <a to="/">Profile</a>
        <a to="/">Settings</a>
        <a className="logout" onClick={logout}>Logout</a>
      </nav>
    </div>
  );
};

export default UserBubble;
