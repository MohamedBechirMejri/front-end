import "./App.css";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
// import Header from "./Components/Header";
// import Menu from "./Components/Menu";
// import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      {/*   <Menu Css="left-menu d-flex" /> */}
      {/*  <Header /> */}
      {/* <Register /> */}
      <Login/>
      <Footer />
    </div>
  );
}

export default App;
