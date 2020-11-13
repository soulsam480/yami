import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import { createGlobalStyle } from "styled-components";
import { colors } from "./styles/variables";
import "shoyo/dist/main.css";
const Global = createGlobalStyle`
  :root,body{
    background-color: ${colors.bg};
    font-size: 14px;
    padding:0;
    margin:0;
  }
  .content {
    padding-top: 60px;
    width:100%;
    padding-left:15px;
    padding-right:15px;
  }
  .btn {
    background-color: ${colors.pr};
    &:hover {
      background-color: ${colors.prl};
    }
  }
`;
ReactDOM.render(
  <React.StrictMode>
    <Global />
    <Router>
      <AppNavbar />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
