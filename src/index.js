import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./style/varibalse.scss";
import "./style/utilities.scss";
import App from "./App";

import { CartProvaider } from "./CartProvaider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvaider>
      <App />
    </CartProvaider>
  </React.StrictMode>,
);
