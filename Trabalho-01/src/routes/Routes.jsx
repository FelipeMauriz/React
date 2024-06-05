
import { Routes, Route } from "react-router-dom";
import Formulario from '../pages/formulario/Formulario';
import TimePokemons from "../pages/timePokemons/TimePokemons";
import  BuscarPokemon  from '../pages/BuscarPokemons/BuscarPokemons';
import { HomePage } from "../pages/homePage/HomePage";

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/time-pokemon" element={<TimePokemons />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/buscar-pokemon" element={<BuscarPokemon />} />
    </Routes>
  );
}
