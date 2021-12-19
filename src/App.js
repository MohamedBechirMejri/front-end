import Header from "./Components/Header";
import Login from "./Components/Header/Login";
import Home from "./Components/Home";
import UserBubble from "./Components/UserBubble";
const App = () => {
  return (
    <div className="App">
      <Header />
      <UserBubble />
      <Home />
      <Login />
    </div>
  );
};
export default App;
