import React, {useState, useInsertionEffect, useEffect} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";


const App = () => {
  const [pokelist, setPokeList] = useState ([]);
  const [pokename, setPokeName] = useState ("");

  

    const pegarPokeNames = () => {
    
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(()=>{
    pegarPokeNames()
  },[]);

  const changePokeName = (event) => {
    setPokeName(event.target.value )
  };

    return (
      <div className="App">

        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokelist.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokename && <PokeCard pokemon={pokename} />}
      </div>
    );
  }


export default App;
