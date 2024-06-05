
import { useState } from "react"
import { Card } from "../../components/Card/Card";

export default function TimePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [novoPokemon, setNovoPokemon] = useState({ name: '', image: '' });

  const adicionarPokemon = () => {
    if (novoPokemon.name && novoPokemon.image) {
      setPokemons([...pokemons, { ...novoPokemon, id: pokemons.length + 1 }]);
      setNovoPokemon({ name: '', image: '' });
    }
  };

  return (
    <div>
      <h1>Monte seu Time! Escolha 6 Pokémons</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id} style={{ margin: '10px 0' }}>
            <Card pokemon={pokemon} />
          </li>
        ))}
      </ul>
      {pokemons.length < 6 && (
        <div>
          <input
            type="text"
            value={novoPokemon.name}
            onChange={(e) => setNovoPokemon({ ...novoPokemon, name: e.target.value })}
            placeholder="Nome do Pokémon"
            style={{ marginRight: '10px' }}
          />
          <input
            type="text"
            value={novoPokemon.image}
            onChange={(e) => setNovoPokemon({ ...novoPokemon, image: e.target.value })}
            placeholder="URL da Imagem do Pokémon"
            style={{ marginRight: '10px' }}
          />
          <button onClick={adicionarPokemon}>Adicionar</button>
        </div>
      )}
    </div>
  );
}
