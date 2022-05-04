import React from "react";
import Router from "./PipeLine/Pipe";
import GlobalState from "./Components/GState";


function App() {
  return (
    <div>
      
      <GlobalState>
        <Router/>
      </GlobalState>
    </div>
  );
}

export default App