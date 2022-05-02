import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../Components/GCont";
import { goToPokeDetalhes} from "../PipeLine/Line"


const CPoke= (props) => {
  const Navigate = useNavigate();
  const { pokemons, setPokemons, pokedex, setPokedex } = useContext(
    GlobalContext
  );

  const addPokedex = () => {
    const pokeIndex = pokemons.findIndex(
      (item) => item.name === props.poke.name
    );
    const novaListPokemons = [...pokemons];
    novaListPokemons.splice(pokeIndex, 1);
    const PokeOrdened = novaListPokemons.sort((a, b) => {
      return a.id - b.id;
    });

    const novaListPokedex = [...pokedex, props.poke];
    const PokedexOrdened = novaListPokedex.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(PokedexOrdened);
    setPokemons(PokeOrdened);
  };

  const removePokedex = () => {
    const pokeIndex = pokedex.findIndex(
      (item) => item.name === props.poke.name
    );

    const NovaListPokedex = [...pokedex];
    NovaListPokedex.splice(pokeIndex, 1);
    const PokedexOrdened = NovaListPokedex.sort((a, b) => {
      return a.id - b.id;
    });

    const novaListPokemons = [...pokemons, props.poke];
    const PokeOrdened = novaListPokemons.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(PokedexOrdened);
    setPokemons(PokeOrdened);
  };

  return (
    <div>
      <div>
        <img
          src={props.poke && props.poke.sprites.front_default}
          alt={props.poke.name}
        />
      </div>
      <div>
        <button onClick={props.isPokedex ? removePokedex : addPokedex}>
          {props.isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
        </button>
        <button
          onClick={() =>
            goToPokeDetalhes(Navigate, props.poke.name, props.isPokedex)
          }
        >
          Ver detalhes
        </button>
      </div>
    </div>
  );
};

export default CPoke;
