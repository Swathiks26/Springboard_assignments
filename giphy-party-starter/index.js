// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const gifyWord = document.getElementById("gifname");
const submitBtn = document.getElementById("submitbtn");
const rmvBtn = document.getElementById("rmvbtn");
const gifSpace = document.getElementById("gifSpace");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  gifyGenerate();
});

async function gifyGenerate() {
  // gifSpace.innerHTML = "";
  const g1 = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${gifyWord.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=10`
  );
  const response = await g1.json();
  // console.log(response);
  const data = await response.data[0].images.fixed_height.url;
  const img = document.createElement("img");
  img.src = data;
  gifSpace.appendChild(img);
}

rmvBtn.addEventListener("click", function (e) {
  e.preventDefault;
  gifname.value = "Enter a search term";
  gifSpace.innerHTML = "... Your GIFs here ..";
});
