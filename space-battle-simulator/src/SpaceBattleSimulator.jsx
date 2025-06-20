import React, { useState } from "react";

function SpaceBattleSimulator({ minDamage, maxDamage }) {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [gameStatus, setGameStatus] = useState("playing");
  //console.log(playerHealth, enemyHealth);

  const getRandomDamage = () =>
    Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;

  const handleFire = () => {
    // console.log("min:", minDamage, "max:", maxDamage);
    const playerFire = getRandomDamage();
    const enemyFire = getRandomDamage();
    //console.log("playerFire:", playerFire, "enemyFire:", enemyFire);

    const newPlayerHealth = Math.max(playerHealth - enemyFire, 0);
    const newEnemyHealth = Math.max(enemyHealth - playerFire, 0);
    setPlayerHealth(newPlayerHealth);
    setEnemyHealth(newEnemyHealth);
    //console.log(newPlayerHealth, newEnemyHealth);
    if (newPlayerHealth <= 0 && newEnemyHealth <= 0) {
      setGameStatus("draw");
    } else if (newPlayerHealth <= 0) {
      setGameStatus("lost");
    } else if (newEnemyHealth <= 0) {
      setGameStatus("won");
    }
  };

  const handleRestart = () => {
    setPlayerHealth(100);
    setEnemyHealth(100);
    setGameStatus("playing");
  };

  const renderMessage = () => {
    switch (gameStatus) {
      case "won":
        return "🚀 You won the battle!";
      case "lost":
        return "💥 You lost the battle!";
      case "draw":
        return "🪐 It's a draw!";
      default:
        return null;
    }
  };

  function renderHealth(health) {
    let emoji;

    if (health === 100) {
      emoji = "❤️";
    } else if (health === 0) {
      emoji = "💀";
    } else {
      emoji = "💔";
    }

    return `${emoji}`;
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🌌 Space Battle Simulator</h1>
      <p>
        Player Health <span>{renderHealth(playerHealth)}</span>: {playerHealth}
      </p>
      <p>
        Enemy Health <span>{renderHealth(enemyHealth)}</span>: {enemyHealth}
      </p>
      {gameStatus === "playing" ? (
        <button onClick={handleFire}>Fire</button>
      ) : (
        <>
          <p>{renderMessage()}</p>
          <button onClick={handleRestart}>Restart</button>
        </>
      )}
    </div>
  );
}

export default SpaceBattleSimulator;
