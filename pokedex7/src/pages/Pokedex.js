import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../Components/GCont";
import CPoke from "../Schemes/CPoke";
import C from "../Schemes/C";
import { goToPokeHome } from "../PipeLine/Line";




const Pokedex = () => {
  const { pokedex } = useContext(GlobalContext);
  const Navigate = useNavigate();

  return (
    <div>
      <C
        title={"Pokédex"}
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