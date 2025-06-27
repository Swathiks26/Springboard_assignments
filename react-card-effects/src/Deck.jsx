import React, { useState, useEffect } from "react";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

function Deck() {
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);
  const [remaining, setRemaining] = useState(52);
  const [isShuffle, setShuffle] = useState(false);

  useEffect(() => {
    async function fetchDeck() {
      const d = await fetch(`${API_BASE_URL}/new/shuffle/`);
      const response = await d.json();
      setDeck(response.deck_id);
      setRemaining(response.remaining);
    }
    fetchDeck();
  }, []);

  //Draw a card from Deck
  async function drawCard() {
    const res = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
    );
    const data = await res.json();

    if (data.success && data.cards.length > 0) {
      setCards((prev) => [...prev, ...data.cards]);
      setRemaining(data.remaining);
      if (remaining === 0) {
        alert("Error: no cards remaining!");
      }
    } else {
      alert("Error: no cards remaining!");
    }
  }

  async function shuffle() {
    if (!deck) return;
    setShuffle(true);
    const res = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck}/shuffle/`
    );
    const data = await res.json();
    if (data.success) {
      setCards([]); // Clear displayed cards
      setRemaining(data.remaining);
    } else {
      alert("Error shuffling deck!");
    }
    setShuffle(false);
  }

  return (
    <div className="deck-container">
      <h1>Deck of Cards</h1>
      <div className="buttons">
        <button
          onClick={drawCard}
          disabled={!deck || remaining === 0 || isShuffle}
        >
          Draw Card
        </button>
        <button
          onClick={shuffle}
          disabled={!deck || isShuffle}
          style={{ marginLeft: "1rem" }}
        >
          {isShuffle ? "Shuffling..." : "Shuffle Deck"}
        </button>
      </div>

      {remaining === 0 && (
        <p style={{ color: "red", fontWeight: "bold", marginTop: "1rem" }}>
          No cards remaining!
        </p>
      )}
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
