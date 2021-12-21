import Header from "./Components/Header";
import Login from "./Components/Header/Login";
import Home from "./Components/Home";
import UserBubble from "./Components/UserBubble";
import React , {useContext} from "react";
import SucessLogin from "./authContext/SuccessLogin";
import { Routes, Route} from "react-router-dom";
import { myContext } from "./context";

const App = () => {
  const  user  = useContext(myContext);
  console.log(user);
  return (
    <div className="App">
   <Routes>

<Route
    path="/login/success"
    element={<SucessLogin />}
   
  />   </Routes>
      <Header />
      { user && <UserBubble user={user} />  }
      <Home />
      { !user && <Login />    } 
      
    </div>
  );
};
export default App;
