import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { URL } from '../../Url/Url';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import GlobalStateContext from "../../Components/GCont";
import C from "../../Schemes/C/C";
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
    axios.get(`https://pokeapi.co/api/v2/gender/${pokemonSelecionar.id}/`)
    .then( response => {
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
        RollBack={() => goToPokedex(Navigate)}
      />
      {pokemonSelecionar && pokemonSelecionar.sprites && (
        <StyledDivGrid>
          <div className="div-name">
            <h1>{pokemonSelecionar.name}</h1>
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
                  <h4>Weight</h4>
                  <p>{pokemonSelecionar.weight}</p>
                </div>
                <div>
                  <h4>Abilities</h4>
                  <p>{pokemonSelecionar.abilities[0].ability.name}</p>
                </div>
                <div>
                  <h4>Gender</h4>
                  <p>{characteristic.name}</p>
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
        </StyledDivGrid>
      )}
    </StyledDivHome>
  );
};

export default PokeDetalhes;
