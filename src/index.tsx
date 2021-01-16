import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import { createGlobalStyle } from 'styled-components';
import { colors } from './styles/variables';
import 'shoyo/dist/main.css';

const Global = createGlobalStyle`
  :root,body{
    background-color: ${colors.bg};
    font-size: 16px;
    padding:0;
    margin:0;
    font-family: 'Quicksand', sans-serif;
  }
  .content {
    width:100%;
    padding:70px 5px 0 5px;
  }
  .btn {
    background-color: ${colors.prd};
    color: black !important;
    &:hover {
      background-color: ${colors.pr};
      color: black !important;
    }
    &:disabled{
      background-color: ${colors.prdisabled};
      color: black !important;
    }
  }
  .input{
    background-color: ${colors.prd};
    border:none;
    font-family: 'Quicksand', sans-serif;
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
  document.getElementById('root'),
);
