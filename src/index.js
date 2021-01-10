import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parse from "parse";

Parse.serverURL = 'https://parseapi.back4app.com';
Parse.initialize(
  'YjX6kib1y4ZL0wYCCXagO161JHCAZNLF8vz04iNh', // This is your Application ID
  'YYhfXbq4guVCOl4BhV5Jcvfh43NNbDbIpAqI2LzG', // This is your Javascript key
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
