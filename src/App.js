import "./App.css";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Register from "./Components/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import userData from "./Auth/useContext";
import { useContext } from "react";

const App = () => {
  const user = useContext(userData);

  return (
    <div className="App">
      {user && <Menu Css="left-menu d-flex" />}
      {user && <Header />}

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="/"
          element={
            user ? <Navigate to="/dashboard" replace={true} /> : <Home />
          }
        />
        <Route
          path="dashboard"
          element={!user ? <Navigate to="/login" replace={true} /> : <Home />}
        />
        <Route
          path="tournaments"
          element={!user ? <Navigate to="/login" replace={true} /> : <Home />}
        />
        <Route
          path="teams"
          element={!user ? <Navigate to="/login" replace={true} /> : <Home />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
