import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App container-fluid">
      <Nav Css="left-menu d-flex" />
      <Header />
    </div>
  );
}

export default App;
