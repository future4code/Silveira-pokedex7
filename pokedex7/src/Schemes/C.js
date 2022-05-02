import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routes/coordinator";

const C = ({ RollBack, Name, NextButton }) => {
  const Navigate = useNavigate();

  const Presentation = () => {
    switch (Name) {
      case "Lista de Pokémons":
        return "Ir para Pokedex";
      case "Pokédex":
        return "Voltar para lista de pokemons";
      default:
        return "Voltar";
    }
  };

  return (
    <C>
      <button onClick={RollBack}>
        {Presentation()}
      </button>
      <h1>{Name}</h1>
      {NextButton && (
        <button onClick={() => goToPokedex(Navigate)}>
          Ir para pokedex
        </button>
      )}
    </C>
  );
};

export default C;
