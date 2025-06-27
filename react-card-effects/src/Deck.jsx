import React, { useState, useEffect } from "react";

function Deck() {
  const baseApi = "https://deckofcardsapi.com/api/deck/new/";
  const [decckId, setDeckId] = useState(null);
  const [cards, setCards] = useState([]);
  const [shuffle, setShuffle] = useState(false);

  useEffect(() => {
    async function loadCards() {
      try {
        const response = await fetch(`${baseApi}/shuffle/?deck_count=1`);
        const data = await response.json();
        setDeckId(data.deck_id);
      } catch (err) {
        alert("Failed to load deck.");
        console.error(err);
      }
    }
    loadCards();
  }, []);

  const drawCard = async function drawCard() {
    try {
      const response = await fetch(
        `https://deckofcardsapi.com/api/deck/${decckId}/draw/?count=1`
      );
      const data = await response.json();
      console.log(data.remaining);
      if (data.remaining < 0 || data.cards.length === 0) {
        alert("No cards remaining");
        return;
      } else {
        setCards((prev) => [...prev, ...data.cards]);
      }
    } catch (err) {
      alert("Error drawing card.");
      console.error(err);
    }
  };

  const shuffling = async function shuffling() {
    try {
      setShuffle(true);
      const response = await fetch(
        `https://deckofcardsapi.com/api/deck/${decckId}/shuffle/`
      );
      const data = await response.json();
      setCards([]); // Remove all drawn cards from view
    } catch (err) {
      alert("Error shuffling deck.");
      console.error(err);
    } finally {
      setShuffle(false);
    }
  };

  return (
    <div className="deck-container">
      <h1>Deck of Cards</h1>
      <div className="buttons">
        <button onClick={drawCard} disabled={!decckId || shuffle}>
          Draw
        </button>
        <button
          onClick={shuffling}
          disabled={!decckId || shuffle}
          style={{ marginLeft: "1rem" }}
        >
          Shuffle
        </button>
      </div>

      <div className="card-stack">
        {cards.map((card, idx) => (
          <img
            key={idx}
            src={card.image}
            alt={`${card.value} of ${card.suit}`}
            style={{ "--i": idx }}
          />
        ))}
      </div>
    </div>
  );
}

export default Deck;
