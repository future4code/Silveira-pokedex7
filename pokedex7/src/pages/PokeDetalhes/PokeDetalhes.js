import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { URL } from '../../Url/Url';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import GlobalStateContext from "../../Components/GCont";
import C from "../../Schemes/C";
import { goToPokeHome, goToPokedex } from "../../PipeLine/Line";
import { StyledDivHome } from "../../Styled";
import { StyledDivGrid, StyledTypeCard, StyledType, StyledCharacteristic, StyledImg, StyledStats } from "./Styled";

const PokeDetalhes = () => {
  const { name, BackPokedex } = useParams();
  const Navigate = useNavigate();
  const { pokemons, pokedex } = useContext(GlobalStateContext);
  const [ pokemonSelecionar, setpokemonSelecionar ] = useState({});
  const [ characteristic, setCharacteristic ] = useState([]);

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
      renderCharacteristic()
    } 
    else {
      setpokemonSelecionar(current)
      renderCharacteristic()
    }
    console.log(pokemonSelecionar)
    console.log(current)
  }, []);

  const renderCharacteristic = () => {
    axios.get(`https://pokeapi.co/api/v2/characteristic/${pokemonSelecionar.id}/`)
    .then( response => {
      console.log("dentro da funcao", response)
      setCharacteristic(response.data);
    })
    .catch( error => {
      console.log(error.response)
    })
  }

  return (
    <StyledDivHome>
      <C
        Name={"Detalhes"}
        RollBack={() => goToPokeHome(Navigate)}
        NextButton={() => goToPokedex(Navigate)}
      />
      {pokemonSelecionar && pokemonSelecionar.sprites && (
        <StyledDivGrid>
          <div className="div-main">
            <div className="div-name">
              <h1>{pokemonSelecionar.name}</h1>
            </div>
          </div>
          <div className="div-main">
            <StyledImg>
              <img src={pokemonSelecionar.sprites.other.dream_world.front_default} />
            </StyledImg>
            <StyledCharacteristic>
                <div>
                  <h4>Height</h4>
                  <p>{pokemonSelecionar.height}</p>
                </div>
                <div>
                  <h4>Category</h4>
                  <p>{pokemonSelecionar.height}</p>
                </div>
                <div>
                  <h4>height</h4>
                  <p>{pokemonSelecionar.height}</p>
                </div>
                <div>
                  <h4>height</h4>
                  <p>{pokemonSelecionar.height}</p>
                </div>
                <div>
                  <h4>height</h4>
                  <p>{pokemonSelecionar.height}</p>
                </div>
            </StyledCharacteristic>
          </div>
            <div className="div-main">
              <StyledStats>
                <h3>Stats</h3>
                <div className="div-grid">
                  {pokemonSelecionar &&
                    pokemonSelecionar.stats.map((stat) => {
                      return (
                      <div key={stat.stat.name}>
                      <p><span>{stat.stat.name}:</span> {stat.base_stat}</p>
                      </div>
                      );
                  })} 
                </div>  
              </StyledStats>
              <StyledType>
                  <p>Type</p>
                  <div className="div-card">
                    {pokemonSelecionar &&
                    pokemonSelecionar.types.map((type) => {
                      return <StyledTypeCard key={type.type.name} className="div-type" divColor={type.type.name}>
                          <p>{type.type.name}</p>
                        </StyledTypeCard>;
                    })} 
                  </div>
              </StyledType> 
            </div> 
          {/* <div>
              <h2>Principais ataques</h2>
              {pokemonSelecionar &&
                pokemonSelecionar.moves.map((move, index) => {
                  return (
                    index < 5 && <p key={move.move.name}>{move.move.name}</p>
                  );
                })}
          </div> */}
        </StyledDivGrid>
      )}
    </StyledDivHome>
  );
};

export default PokeDetalhes;
