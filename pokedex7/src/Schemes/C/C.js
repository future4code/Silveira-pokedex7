import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../PipeLine/Line";
import { StyledButton, StyledMain } from "./Styled";

const C = ({ RollBack, Name, NextButton }) => {
  const Navigate = useNavigate();

  const Presentation = () => {
    switch (Name) {
      case "Pokémons":
        return "Pokédex";
      case "Pokédex":
        return "Pokémons";
      default:
        return "Voltar";
    }
  };

  return (
    <StyledMain>
      <h1>{Name}</h1>
      <StyledButton onClick={RollBack}>
        {Presentation()}
      </StyledButton>
      {/* {NextButton && (
        <StyledButton onClick={() => goToPokedex(Navigate)}>
          Pokédex
        </StyledButton>
      )} */}
    </StyledMain>
  );
};

export default C;
