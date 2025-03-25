import fetch from "node-fetch";

let favNumber = 2;
let a = [4, 5, 6, 7, 8];

function mypro() {
  return fetch(`http://numbersapi.com/${favNumber}?json`)
    .then((response) => response.json())
    .then((data) => data.text)
    .catch((error) => {
      throw error;
    });
}

async function mypro1() {
  // Fetch all facts concurrently with Promise.all
  //let res = [];

  let prop = a.map((num) =>
    fetch(`http://numbersapi.com/${num}?json`)
      .then((res) => res.json())
      .then((data) => data.text)
  );
  //  for (let e of a) {
  // let prom = fetch(`http://numbersapi.com/${e}?json`)
  //   .then((response) => response.json())
  //   .then((data) => data.text);
  // res.push(prom);
  //  }
  const result = await Promise.all(prop);
  return result;
}

async function mypro2() {
  let res = [];
  for (let c = 1; c <= 4; c++) {
    const response1 = await fetch(`http://numbersapi.com/${favNumber}?json`);
    const data = await response1.json();
    res.push(data.text);
  }
  return res;
}

function setup() {
  mypro()
    .then((res) => {
      console.log(`fact for your fav no ${favNumber}:`, res);
      return mypro1();
    })
    .then((res) => {
      console.log("fact for array of nos:", a, res);
      return mypro2();
    })
    .then((res) => console.log("4 facts about your fav no:", res))
    .catch((err) => console.error(err));
}
setup();
