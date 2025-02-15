import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalContext } from "./Context/ModalContext";

// ------> css
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalContext>
      <App />
    </ModalContext>
  </React.StrictMode>
);