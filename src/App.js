import "./App.css";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Register from "./Components/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Menu Css="left-menu d-flex" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
