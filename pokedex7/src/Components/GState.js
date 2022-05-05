import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GCont";
import axios from "axios";
import { URL } from "../Url/Url";

const GlobalState = (props) => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    getPokemonName(); 
  }, []);

  useEffect(() => {
    const NovaList = [];
    pokemonNames.forEach((item) => {
      axios.get(`${URL}/pokemon/${item.name}`)
      .then((response) => {
        NovaList.push(response.data);
        if (NovaList.length === 10) {
          const ListOrdern = NovaList.sort((a, b) => {
            return a.id - b.id;
          });
          setPokemons(ListOrdern);
        }
      })
      .catch((error) => console.log(error.message));
    });
  }, [pokemonNames]);

  const getPokemonName = () => {
    axios.get(`${URL}/pokemon?limit=10`)
    .then((response) => {
      setPokemonNames(response.data.results);
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
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
