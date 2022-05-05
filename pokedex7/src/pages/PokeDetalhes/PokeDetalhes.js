import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { URL } from '../../Url/Url';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import GlobalStateContext from "../../Components/GCont";
import C from "../../Schemes/C";
import { goToPokeHome, goToPokedex } from "../../PipeLine/Line";
import { StyledDivHome } from "../../Styled";

const PokeDetalhes = () => {
  const { name, BackPokedex } = useParams();
  const Navigate = useNavigate();
  const { pokemons, pokedex } = useContext(GlobalStateContext);
  const [pokemonSelecionar, setpokemonSelecionar] = useState({});

  useEffect(() => {
    let current = [];
    
    if (BackPokedex) {
      current = pokedex.find((item) => {
        return item.name === name;
      });
    } 
    else {
      current = pokemons.find((item) => {
        return item.name === name;
      });
    }

    if (!current){
      axios.get(`${URL}/pokemon/${name}`)
      .then((response) => setpokemonSelecionar(response.data))
      .catch((error)=> console.log(error.response.message))
    } 
    else {
      setpokemonSelecionar(current)
    }
  }, []);

  return (
    <StyledDivHome>
      <C
        Name={"Detalhes"}
        RollBack={() => goToPokeHome(Navigate)}
        NextButton={() => goToPokedex(Navigate)}
      />
      {pokemonSelecionar && pokemonSelecionar.sprites && (
        <div>
          <div>
            <img src={pokemonSelecionar.sprites.front_default} />
            <img src={pokemonSelecionar.sprites.back_default} />
          </div>
          <div>
            <h2>Poderes</h2>
            {pokemonSelecionar &&
              pokemonSelecionar.stats.map((stat) => {
                return (
                  <p key={stat.stat.name}>
                    <div>{stat.stat.name}: </div>
                    {stat.base_stat}
                  </p>
                );
              })}
          </div>
          <div>
            <h2>
              {pokemonSelecionar &&
                pokemonSelecionar.types.map((type) => {
                  return <p key={type.type.name}>{type.type.name}</p>;
                })}
            </h2>
            <div>
              <h2>Principais ataques</h2>
              {pokemonSelecionar &&
                pokemonSelecionar.moves.map((move, index) => {
                  return (
                    index < 5 && <p key={move.move.name}>{move.move.name}</p>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </StyledDivHome>
  );
};

export default PokeDetalhes;
