import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeHome from "../pages/PokeHome";
import PokeDetalhes from "../pages/PokeDetalhes";
import Pokedex from "../pages/Pokedex";

const Pipe = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokeHome/>} />
        <Route path="/pokemon/:name/:BackPokedex" element={<PokeDetalhes/>}/>
        <Route path="/pokedex" element={<Pokedex/>} />
        <Route path="*" element={<p>Bem Vindo a Narnia!</p>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Pipe;
