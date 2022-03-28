import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/layout/Navbar"



ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Navbar />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
