import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../PipeLine/Line";

const C = ({ RollBack, Name, NextButton }) => {
  const Navigate = useNavigate();

  const Presentation = () => {
    switch (Name) {
      case "Lista de Pokémons":
        return "Ir para Pokedex";
      case "Pokedex":
        return "Voltar para lista de pokemons";
      default:
        return "Voltar";
    }
  };

  return (
    <div>
      <button onClick={RollBack}>
        {Presentation()}
      </button>
      <h1>{Name}</h1>
      {NextButton && (
        <button onClick={() => goToPokedex(Navigate)}>
          Ir para pokedex
        </button>
      )}
    </div>
  );
};

export default C;
