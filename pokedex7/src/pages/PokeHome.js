import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CPoke from "../Schemes/CPoke/CPoke";
import C from "../Schemes/C/C";
import { goToPokedex } from "../PipeLine/Line";
import GlobalStateContext from "../Components/GCont";
import { StyledDivHome, StyledDivCard } from "../Styled";


const PokeHome = () => {
  const { pokemons } = useContext(GlobalStateContext);
  const Navigate = useNavigate();

  return (
    <StyledDivHome>
      <C
        Name={"Pokémons"}
        RollBack={() => goToPokedex(Navigate)}
      />
      <StyledDivCard>
        {pokemons &&
          pokemons.map((poke) => {
            return <CPoke key={poke.name} poke={poke} />;
          })}
      </StyledDivCard>
    </StyledDivHome>
  );
};

export default PokeHome;
