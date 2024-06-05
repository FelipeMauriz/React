
export function Card({ pokemon }) {
  return (
    <div style={{ border: "1px solid black", margin: "1px", padding: "1px" }}>
      <img src={pokemon.image} alt={pokemon.name} style={{ width: "100px", height: "100px" }} />
      <h2>{pokemon.name}</h2>
    </div>
  );
}