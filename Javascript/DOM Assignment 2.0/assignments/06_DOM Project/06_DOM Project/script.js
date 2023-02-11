// targeting logo image and changing it
let logo = (document.querySelector("header img").src =
  "./assets/ineuron-logo.png");

// targetting price
let price = document.querySelector(".app_price span");
price.innerText = "$10";

// adding social media link
let parent = document.querySelector(".footer_social");

let divElement = document.createElement("div");
divElement.classList.add("footer_social_ico");

let icon = document.createElement("i");
icon.classList.add("fa-brands", "fa-linkedin");

divElement.appendChild(icon);
parent.appendChild(divElement);
