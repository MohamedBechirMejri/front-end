import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import userData from "./Auth/useContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {" "}
    <BrowserRouter>
      <userData.Provider value={null}>
        <App />
      </userData.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
