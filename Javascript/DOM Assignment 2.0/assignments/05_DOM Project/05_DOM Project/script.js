// changing nav links color
let navItems = document.querySelectorAll(".nav-link");
for (let i = 0; i < navItems.length; i++) {
  navItems[i].style.color = "purple";
}

// adding button in navbar
// creating button element
let btnElement = document.createElement("a");
btnElement.innerText = "Pro Subscription";
btnElement.classList.add("btn");
btnElement.setAttribute("href", "#");
// appending button to parent element
let parent = document.querySelector(".nav-center");
parent.lastElementChild.appendChild(btnElement);

// add recipee item
let recipes = document.querySelector(".tags-container");
let recipeItem = document.createElement("a");
recipeItem.setAttribute("href", "#");
recipeItem.innerText = "Chinese (7)";
recipes.lastElementChild.appendChild(recipeItem);

// add 6th card
let cardElement = document.createElement("div");
// cardElement.innerHTML = "<h3>add 6th card here</h3>";
cardElement.innerHTML = `<a href="#" class="recipe-text">
                          <img src="./img/pulav.jpg" class="recipe-img " />
                          <h5 class="recipe-name">Pulao</h5>
                          <p class="recipe-disp">Prep : 15min | Cook : 35min</p>
                        </a>`;
cardElement.classList.add("card");

let cardGallary = document.querySelector(".recipe-gallery");
cardGallary.appendChild(cardElement);

// changing cards text color
cardText = document.querySelectorAll(".recipe-text");
for (let i = 0; i < cardText.length; i++) {
  cardText[i].style.color = "blueviolet";
}
