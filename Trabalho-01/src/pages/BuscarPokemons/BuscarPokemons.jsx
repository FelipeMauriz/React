import { useState } from 'react';
import { pokemonList } from './ListaPokemons';

export default function BuscarPokemon() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const filteredPokemon = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatPokemonName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar Pokémon"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleClearSearch}>Limpar</button>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {filteredPokemon.map((pokemon, index) => (
          <li key={pokemon.id} style={{ textAlign: 'left', paddingLeft: '20px', marginBottom: '10px' }}>
            <span style={{ display: 'inline-block', width: '30px' }}>{index + 1}.</span>
            <span style={{ marginLeft: '10px' }}>{formatPokemonName(pokemon.name)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
