function App() {
  const spacePhenomena = [
    { id: 1, name: "Asteroid Belt", emoji: "☄️" },
    { id: 2, name: "Galactic Nebula", emoji: "🌌" },
    { id: 3, name: "Black Hole", emoji: "🕳️" },
    { id: 4, name: "Supernova Explosion", emoji: "💥" },
    { id: 5, name: "Pulsar", emoji: "⚡" },
    { id: 6, name: "Quasar", emoji: "💫" },
    { id: 7, name: "Exoplanet", emoji: "🪐" },
    { id: 8, name: "Interstellar Cloud", emoji: "☁️" },
    { id: 9, name: "Gamma-Ray Burst", emoji: "🌠" },
    { id: 10, name: "Magnetic Field Reversal", emoji: "🧲" },
  ];

  const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];
  const elements = [];
  for (let i = 0; i < spacePhenomena.length; i++) {
    const p = spacePhenomena[i];
    const status =
      observationStatuses[
        Math.floor(Math.random() * observationStatuses.length)
      ];
    elements.push(
      <div key={p.id}>
        {p.emoji} {p.name} - {status}
        {status === "🚀 Prime for Study" && (
          <span> (Bring your advanced equipment!) </span>
        )}
      </div>
    );
  }
  return <div>{elements}</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
