import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CPoke from "../Schemes/CPoke";
import C from "../Schemes/C";
import { goToPokedex } from "../PipeLine/Line";
import GlobalStateContext from "../Components/GCont";


const PokeHome = () => {
  const { pokemons } = useContext(GlobalStateContext);
  const Navigate = useNavigate();

  return (
    <>
      <C
        Name={"Lista dos Pokémons"}
        RollBack={() => goToPokedex(Navigate)}
      />
      <div>
        {pokemons &&
          pokemons.map((poke) => {
            return <CPoke key={poke.name} poke={poke} />;
          })}
      </div>
    </>
  );
};

export default PokeHome;
