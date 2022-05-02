import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { URL } from '../Url/Url';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import GlobalContext from "../Components/GCont";
import C from "../Schemes/C";


const PokeDetalhes = () => {
  const { name, BackPokedex } = useParams();
  const Navigate = useNavigate();
  const { pokemons, pokedex } = useContext(GlobalContext);
  const [pokemonSelecionar, setpokemonSelecionar] = useState({});

  useEffect(() => {
      let current = [];
       if (BackPokedex) {
       current = pokedex.find((item) => {
              return item.name === name;
                                         });
        } else {
       current = pokemons.find((item) => {
              return item.name === name;
                                          });
                }

    if (!current){
      axios.get(`${URL}/pokemon/${name}`)
           .then((response) => setpokemonSelecionar(response.data))
           .catch((error)=> console.log(error.response.message))
    } else {
                               setpokemonSelecionar(current)
            }
                     }, []);

  return (
    <div>
      <C RollBack={() => Navigate.goBack()} NextButton />
      {pokemonSelecionar && pokemonSelecionar.sprites && (
        <div>
          <div>
            <div src={pokemonSelecionar.sprites.front_default} />
            <div src={pokemonSelecionar.sprites.back_default} />
          </div>
          <div>
            <h2>Poderes</h2>
            {pokemonSelecionar &&
              pokemonSelecionar.stats.map((stat) => {
                return (
                  <p key={stat.stat.name}>
                    <strong>{stat.stat.name}: </strong>
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
    </div>
  );
};

export default PokeDetalhes;
