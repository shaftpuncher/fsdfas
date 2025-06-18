const btn = document.getElementById("btn");
const audio = document.getElementById("audio");
const count = document.getElementById("count");

let amount = 0;

window.onload = () => {
  load(); // ✅ call the function with parentheses
  count.innerHTML = amount; // ✅ fixed typo from `amoutn` to `amount`
};

function save() {
  localStorage.setItem("amount", JSON.stringify(amount)); // ✅ use "amount"
}

function load() {
  const stored = localStorage.getItem('amount'); // ✅ fixed key name from 'amoutn'
  if (stored) {
    amount = JSON.parse(stored);
  }
}

function butt() {
  amount++;
  audio.play();
  count.innerHTML = amount;
  save(); // ✅ you probably want to save after updating
}