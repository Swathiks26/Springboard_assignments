import fetch from "node-fetch";

// function shuffle() {
//   // Request a newly shuffled deck
//   fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//     .then((response) => response.json())
//     .then((data) => {
//       const deckId = data.deck_id;
//       // Draw a single card from the shuffled deck
//       return fetch(
//         `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           const card1 = data.cards[0];
//           return fetch(
//             `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
//           )
//             .then((response) => response.json())
//             .then((data) => {
//               const card2 = data.cards[0];
//               console.log(`${card1.value} of ${card1.suit}`);
//               console.log(`${card2.value} of ${card2.suit}`);
//             })
//             .catch((error) => console.error("Error:", error));
//         });
//     });
// }

async function shuffle() {
  const shuffled = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  const response = await shuffled.json();
  const deckId = response.deck_id;
  return deckId;
}

async function oneCard(val) {
  const c1 = await fetch(
    `https://deckofcardsapi.com/api/deck/${val}/draw/?count=1`
  );
  const response1 = await c1.json();
  const data1 = response1.cards[0];
  console.log(`One card : ${data1.value} of ${data1.suit}`);
}

async function twoCards(val) {
  const c1 = await fetch(
    `https://deckofcardsapi.com/api/deck/${val}/draw/?count=1`
  );
  const response1 = await c1.json();
  const data1 = response1.cards[0];
  const c2 = await fetch(
    `https://deckofcardsapi.com/api/deck/${val}/draw/?count=1`
  );
  const response2 = await c2.json();
  const data2 = response2.cards[0];
  console.log(
    `The two cards: ${data1.value} of ${data1.suit} and ${data2.value} of ${data2.suit}`
  );
}
shuffle()
  .then((res) => {
    oneCard(res);
    return res;
  })
  .then((res) => twoCards(res))
  .catch((err) => console.log(err));
