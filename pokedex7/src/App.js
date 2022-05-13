import React from "react";
import Router from "./PipeLine/Pipe";
import GlobalState from "./Components/GState";
import { GlobalStyle, MainDiv } from "./Styled";


function App() {
  return (
    <MainDiv>
      <GlobalStyle/>
      <GlobalState>
        <Router/>
      </GlobalState>
    </MainDiv>
  );
}

export default App