import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../Components/GCont";
import CPoke from "../Schemes/CPoke";
import C from "../Schemes/C";
import { goToPokeHome } from "../PipeLine/Line";

const Pokedex = () => {
  const { pokedex } = useContext(GlobalStateContext);
  const Navigate = useNavigate();

  return (
    <div>
      <C
        Name={"Pokédex"}
        RollBack={() => goToPokeHome(Navigate)}
      />
      <div>
        {pokedex &&
          pokedex.map((poke) => {
            return <CPoke isPokedex key={poke.name} poke={poke} />;
          })}
      </div>
    </div>
  );
};

export default Pokedex;