const phrases = [
  "Hello, world!",
  "Random text 1",
  "Random text 2",
  "Random text 3",
];
const button = document.getElementById("button");
const randomText = document.getElementById("random-text");

button.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * phrases.length);
  randomText.innerHTML = phrases[randomNumber];
});
