import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://app-134458nebu87.frontegg.com",
  clientId: "2fa1edd0-64f4-4ad3-b14f-f8162f307454",
  appId: "7ebdc579-86ad-439d-9ab1-e264f83f0b06",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FronteggProvider contextOptions={contextOptions}>
    <App />
  </FronteggProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
