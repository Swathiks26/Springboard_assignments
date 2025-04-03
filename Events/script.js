document.addEventListener("DOMContentLoaded", function () {
  const inputClr = document.querySelector("#color-input");
  const setClrBtn = document.querySelector("form button");
  const newBoxBtn = document.querySelector("#new-box-button");
  const boxContainer = document.querySelector("#box-container");

  let boxId = 0;
  let boxClr = null;
  newBoxBtn.addEventListener("click", function (event) {
    event.preventDefault();
    createBox();
  });

  setClrBtn.addEventListener("click", function (event) {
    boxClr = inputClr.value;
    if (inputClr.value) {
      event.preventDefault();
      const boxes = document.querySelectorAll(".box");
      for (const box of boxes) {
        box.style.backgroundColor = inputClr.value;
      }
    } else {
      alert("Please enter a valid color!!");
    }
    inputClr.value = "";
  });

  function createBox() {
    const box = document.createElement("div");
    box.setAttribute("originalId", boxId);
    box.innerText = `Box ${boxId}`;
    boxId++;
    box.className = "box";
    box.style.backgroundColor = boxClr;
    boxContainer.appendChild(box);
  }
  document.addEventListener("dblclick", function (e) {
    if (e.target.className === "box") {
      e.target.remove();
    }
  });
  document.addEventListener("mouseover", function (e) {
    if (e.target.className === "box") {
      e.target.textContent = `x: ${e.pageX}, y: ${e.pageY}`;
    }
  });
  document.addEventListener("mouseout", function (e) {
    if (e.target.className === "box") {
      e.target.innerText = "Box " + e.target.getAttribute("originalId");
    }
  });

  window.addEventListener("keydown", function (event) {
    /* Adds a new box when the "n" key is pressed. */
    if (event.key === "n" || event.key === "N") {
      createBox(); // Adds a new box.
    }
  });
});
