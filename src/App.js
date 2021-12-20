import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Header/Login";
import Dashboard from "./Components/Dashboard";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Login />
    </div>
  );
};
export default App;
