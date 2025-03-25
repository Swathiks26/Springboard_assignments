document.addEventListener("DOMContentLoaded", function () {
  let deckId = "";
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((response) => response.json())
    .then((data) => {
      deckId = data.deck_id;
    });

  document.getElementById("draw-card").addEventListener("click", function () {
    //console.log("Button clicked!");

    if (!deckId) {
      console.log("no deckId");
      return;
    }

    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.remaining === 0) {
          document.getElementById("draw-card").disabled = true;
          alert("No more cards left in deck!");
        }
        if (data.cards.length > 0) {
          const card = data.cards[0];
          const cardImg = document.createElement("img");
          cardImg.src = card.image;
          cardImg.alt = `${card.value} of ${card.suit}`;
          cardImg.style.setProperty(
            "--rotation",
            `${Math.random() * 30 - 15}deg`
          );
          document.getElementById("card-container").appendChild(cardImg);
        }
      })
      .catch((error) => console.error(error));
  });
});
