const btn = document.getElementById("btn");
const audio = document.getElementById("audio");
const count = document.getElementById("count");
const streakCount = document.getElementById("streakCount");
const resetCount = document.getElementById("resetCount")
let amount = 0;
let streak = 0
let reset = 0

window.onload = () => {
  load(); // ✅ call the function with parentheses
  loadStreak()
  loadReset()
  streak.innerHTML = streak
  reset.innerHTML = reset
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
function saveStreak() {
  localStorage.setItem("streak", JSON.stringify(streak)); // ✅ use "amount"
}

function loadStreak() {
  const stored = localStorage.getItem('streak'); // ✅ fixed key name from 'amoutn'
  if (stored) {
    streak = JSON.parse(stored);
  }
}
function saveReset() {
  localStorage.setItem("reset", JSON.stringify(reset)); // ✅ use "amount"
}

function loadReset() {
  const stored = localStorage.getItem('reset'); // ✅ fixed key name from 'amoutn'
  if (stored) {
    reset = JSON.parse(stored);
  }
}
function resetAdd(){
  reset++
  resetCount.innerHTML = reset
  saveReset()
  streak = 0
  streakCount.innerHTML = streak
  saveStreak()
}
function streakAdd(){
  streak++
  streakCount.innerHTML = streak
  saveStreak()
}
function butt() {
  amount++;
  audio.play();
  count.innerHTML = amount;
  save(); // ✅ you probably want to save after updating
}