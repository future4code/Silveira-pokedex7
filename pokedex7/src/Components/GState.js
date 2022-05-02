import React, { useEffect, useState } from "react";
import GlobalContext from "./GCont";
import axios from "axios";
import { URL } from "../Url/Url";


const GlobalState = (props) => {
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
     getPokemonName();
                   }, []);

  useEffect(() => {
    const NovaList = [];
    pokemonName.forEach((item) => {
      axios
        .get(`${URL}/pokemon/${item.name}`)
        .then((response) => {
            NovaList.push(response.data);
            if (NovaList.length === 30) {
            const ListOrdern = NovaList.sort((a, b) => {
              return a.id - b.id;
                                                        });
            setPokemons(ListOrdern);
                                         }
                             })
        .catch((error) => console.log(error.message));
                                     });
                     }, [pokemonName]);

  const getPokemonName = () => {
    axios .get(`${URL}/pokemon?limit=30`)
          .then((response) => {
               setPokemonName(response.data.results);
                               })
          .catch((error) => console.log(error.message));
                                 };

  const data = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
