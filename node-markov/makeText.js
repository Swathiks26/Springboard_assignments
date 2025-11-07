/** Command-line tool to generate Markov text. */

const fs = require("fs");
const axios = require("axios");
const { MarkovMachine } = require("./markov");

async function makeTextFromFile(path) {
  try {
    let contents = fs.readFileSync(path, "utf8");
    let mm = new MarkovMachine(contents);
    console.log(mm.makeText());
  } catch (err) {
    console.error(`Error reading file: ${path}\n${err.message}`);
    process.exit(1);
  }
}

async function makeTextFromURL(url) {
  try {
    let resp = await axios.get(url);
    let mm = new MarkovMachine(resp.data);
    console.log(mm.makeText());
  } catch (err) {
    console.error(`Error fetching URL: ${url}\n${err.message}`);
    process.exit(1);
  }
}

let method = process.argv[2];
let value = process.argv[3];

if (!method || !value) {
  console.error("Usage: node makeText.js <file|url> <path/url>");
  process.exit(1);
}

if (method === "file") {
  makeTextFromFile(value);
} else if (method === "url") {
  makeTextFromURL(value);
} else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}
