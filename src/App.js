import React from "react";
import { useAuth } from "@frontegg/react";
import Game from "./components/Game.js";

function App() {
  const { isAuthenticated } = useAuth();

  return <div className="App">{isAuthenticated && <Game />}</div>;
}

export default App;
