import React from "react";
import ReactDOM from "react-dom";
import "./styles/globals/default.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppNavbar />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
