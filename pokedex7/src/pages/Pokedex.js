import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../Components/GCont";
import CPoke from "../Schemes/CPoke/CPoke";
import C from "../Schemes/C";
import { goToPokeHome } from "../PipeLine/Line";
import { StyledDivHome, StyledDivCard } from "../Styled";

const Pokedex = () => {
  const { pokedex } = useContext(GlobalStateContext);
  const Navigate = useNavigate();

  return (
    <StyledDivHome>
      <C
        Name={"Pokédex"}
        RollBack={() => goToPokeHome(Navigate)}
      />
      <StyledDivCard>
        {pokedex &&
          pokedex.map((poke) => {
            return <CPoke isPokedex key={poke.name} poke={poke} />;
          })}
      </StyledDivCard>
    </StyledDivHome>
  );
};

export default Pokedex;