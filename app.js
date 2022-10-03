let counter = 0;
const CountEl = document.querySelector("#count-el");
const Reset = document.querySelector("#reset-btn");
const Trash = document.querySelector(".gg-trash");

function increment() {
  counter++;
  CountEl.innerHTML = counter;
  Reset.style.display = "inline";
  Trash.style.display = "block";
}

function reset() {
  counter = 0;
  CountEl.innerHTML = counter;
  Reset.style.display = "none";
}

function save() {
  let previous = counter + " - ";
  const history = document.querySelector(".history");
  history.innerHTML += previous;
  counter = 0;
  document.querySelector("#count-el").innerHTML = counter;
}

function delHistory() {
  const history = document.querySelector(".history");
  history.innerText = "";
  Trash.style.display = "none";
}
