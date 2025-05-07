function Pokecard({ id, name, type, base_experience }) {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        textAlign: "center",
        width: "200px",
        fontFamily: "sans-serif",
      }}
    >
      <h3 style={{ margin: "0 0 10px", color: "blue" }}>{name}</h3>
      <img src={imgSrc} alt={name} />
      <p>Type:{type}</p>
      <p>EXP:{base_experience}</p>
    </div>
  );
}
