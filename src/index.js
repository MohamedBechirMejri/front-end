import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./Styles/leftMenu.scss";
import "./Styles/header.scss";
import "./Styles/footer.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
// eslint-disable-next-line no-unused-vars
import bootstrap from "bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
