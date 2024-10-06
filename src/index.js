import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
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
