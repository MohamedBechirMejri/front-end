import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App container-fluid">
      <Menu Css="left-menu d-flex" />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
