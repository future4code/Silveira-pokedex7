import React from "react";
import Router from "./PipeLine/Pipe"
import GlobalState from "./Components/GState";


function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App