import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import CSSReset from "styles/reset.css";
import GlobalStyle from "styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <CSSReset />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
