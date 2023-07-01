import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//$ Render utilizzando la Concurrent Mode
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
    <App />
  </React.StrictMode>
);

//$ Legacy mode
// ReactDOM.render(<App />, document.getElementById('root'));