let item1 = document.querySelector(".clash-card__unit-stats--barbarian");
let item2 = document.querySelector(".clash-card__unit-stats--archer");
let item3 = document.querySelector(".clash-card__unit-stats--giant");
let item4 = document.querySelector(".clash-card__unit-stats--goblin");
let item5 = document.querySelector(".clash-card__unit-stats--wizard");

let stats = document.querySelectorAll(".one-third");
for (let i = 0; i < stats.length; i++) {
  stats[i].style.color = "#fff";
}

item1.style.backgroundColor = "#ec9b3b";
item2.style.backgroundColor = "#ee5487";
item3.style.backgroundColor = "#f6901a";
item4.style.backgroundColor = "#82bb30";
item5.style.backgroundColor = "#4facff";
