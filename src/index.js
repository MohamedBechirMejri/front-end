import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import  Context  from "./context";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
 <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Context>
  </React.StrictMode> ,
  document.getElementById("root")
);
