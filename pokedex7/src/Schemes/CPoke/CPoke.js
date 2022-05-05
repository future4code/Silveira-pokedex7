import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../Components/GCont";
import { goToPokeDetalhes} from "../../PipeLine/Line"
import { StyledDiv, StyledDivImg, StyledInfo, StyledButton, StyledTypes, StyledTypeCard } from "./Styled";

const CPoke= (props) => {
  const Navigate = useNavigate();
  const { pokemons, setPokemons, pokedex, setPokedex } = useContext(
    GlobalStateContext
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
      {console.log(props.poke)}
      <StyledDiv>
        <div className="div-card">
          <StyledDivImg onClick={() => goToPokeDetalhes(Navigate, props.poke.name, props.isPokedex)}>
            <img
              src={props.poke && props.poke.sprites.other.dream_world.front_default}
              alt={props.poke.name}
            />
          </StyledDivImg>
          <div>
            <StyledInfo>
              <p><strong>Nº{props.poke.id}</strong></p>
              <h2>{props.poke.name}</h2>
            </StyledInfo>
            <StyledTypes>
              {props.poke && props.poke.types.map( type => {
                return <StyledTypeCard key={props.poke.name} className="div-type" divColor={type.type.name}>
                  {console.log("Nome do tipo:",type.type.name)}
                  <p>{type.type.name}</p>
                </StyledTypeCard>
              })}
            </StyledTypes>
          </div>
        </div>
        <div>
          <StyledButton onClick={props.isPokedex ? removePokedex : addPokedex} >
            
            {props.isPokedex ? <span>Remover da Pokédex</span> : <span>Adicionar a Pokédex</span>}
          </StyledButton>
        </div>
      </StyledDiv>
    </div>
  );
};

export default CPoke;
