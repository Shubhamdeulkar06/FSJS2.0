# DOM Assignments 2.0

## Assignment 1

### Task1

![Task 1](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)

### Task1 solution

```JavaScript
// targeting Contact and changing it to Projects
let lis = document.querySelectorAll("nav ul li");
lis[2].innerHTML = "<a>Projects</a>";

// Creating new li to add Hire Me
// creating list element
let liElement = document.createElement("li");
liElement.innerHTML = "<a>Hire Me</a>";

// selecting ul element in nav tag
let navUlElement = document.querySelector("nav ul");
navUlElement.appendChild(liElement);
```

### Task2

![Task 2](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)

### Task2 solution

```JavaScript
// targeting Contact and changing it to Projects
let lis = document.querySelectorAll("nav ul li");
lis[2].innerHTML = "<a>Projects</a>";
// change placeholder
let search = document.querySelector("input");
search.placeholder = "search My Project";
```

### Task3

![Task 3](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)

### Task3 solution

```JavaScript
// targeting Contact and changing it to Projects
let lis = document.querySelectorAll("nav ul li");
lis[2].innerHTML = "<a>Projects</a>";
// changing the text content
let spanElement = document.querySelectorAll(".hero-left-section p span");
spanElement[2].innerText = "iNeuron Intelligence Pvt Ltd";
```

### Task4

![Task 4](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)

### Task4 solution

```JavaScript
// targeting Contact and changing it to Projects
let lis = document.querySelectorAll("nav ul li");
lis[2].innerHTML = "<a>Projects</a>";
// changing image
let imgElement = (document.querySelector(".hero-right-section img").src =
  "./circle.PNG");
```

### Task5

![Task 5](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task5Output.png)

### Task5 solution

```JavaScript
// targeting Contact and changing it to Projects
let lis = document.querySelectorAll("nav ul li");
lis[2].innerHTML = "<a>Projects</a>";

// creating button element
let btnElement = document.createElement("button");
btnElement.innerText = "Support Me";
// appending button to parent element
let parent = document.querySelector(".hero-right-section-btns");
parent.appendChild(btnElement);

```

## Assignment 2

### Task1

![Task 1](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)

### Task1 solution

```JavaScript
// targeting Contact and changing it to Projects
let lis = document.querySelectorAll("nav ul li");
lis[2].innerHTML = "<a>Projects</a>";

// changing color for each element
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  // added style to each element
  element.style.backgroundColor = "#dadaf8";
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

```

### Task2

![Task 2](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)

### Task2 solution

```JavaScript
// targeting Contact and changing it to Projects
let lis = document.querySelectorAll("nav ul li");
lis[2].innerHTML = "<a>Projects</a>";

// Creating new accordian
let accordianElement = document.createElement("div");
accordianElement.classList.add("accordian");
accordianElement.innerHTML = `<h3>Skills</h3><p>I posses a very good command over the Full Stack Development technologies like MERN which can be
 seen in my work over the Github.</p>`;

// selecting parent
let accordianWrapper = document.querySelector(".accordian-wrapper");
accordianWrapper.appendChild(accordianElement);

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  // added style to each element
  element.style.backgroundColor = "#dadaf8";
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

```

## Assignment 3

### Task1

![Task 1](./DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)

### Task1 solution

```JavaScript
// targeting user Output Board
    let inputs = document.querySelectorAll(".mainLeftDetails input");
    inputs[0].value = "FSJS 2.0";
    inputs[1].value = "fsjs@ineuron.ai";
    document.querySelector(".enterMessage").value = "Hello World";
    // targeting user Input Board
    let inputss = document.querySelectorAll(".mainRight form input");
    inputss[0].value = "FSJS 2.0";
    inputss[1].value = "fsjs@ineuron.ai";
    document.querySelector(".userMessage").value = "Hello World";

```

## Assignment 4

### Task1

![Task 1](./04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)

### Task1 solution

```JavaScript
let item1 = document.querySelector(".clash-card__unit-stats--barbarian");
let item2 = document.querySelector(".clash-card__unit-stats--archer");
let item3 = document.querySelector(".clash-card__unit-stats--giant");
let item4 = document.querySelector(".clash-card__unit-stats--goblin");
let item5 = document.querySelector(".clash-card__unit-stats--wizard");

// adding color white to items footer element
let stats = document.querySelectorAll(".one-third");
for (let i = 0; i < stats.length; i++) {
  stats[i].style.color = "#fff";
}

// adding background color
item1.style.backgroundColor = "#ec9b3b";
item2.style.backgroundColor = "#ee5487";
item3.style.backgroundColor = "#f6901a";
item4.style.backgroundColor = "#82bb30";
item5.style.backgroundColor = "#4facff";

```

## Assignment 5

### Task1

![Task 1](/Javascript/DOM%20Assignment%202.0/assignments/05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)

### Task1 solution

```JavaScript
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



```

## Assignment 6

![Task 1](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)
![Task 2](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

### solution

```JavaScript
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



```

## Assignment 7

### Task

![Before](./DOM%20P7/DOM%20P7/ass7.1-before.png)
![before](./DOM%20P7/DOM%20P7/ass7.2-before.png)
![After](./DOM%20P7/DOM%20P7/ass7.1-after.png)
![after](./DOM%20P7/DOM%20P7/ass7.2-after.png)

### Task solution

```JavaScript
// selecting element to target
let languages = document.querySelectorAll(".main__languages a");
// iterating till last element
for (let i = 0; i < languages.length; i++) {
  // checking if language contains 2.0
  if (languages[i].innerText.includes("2.0")) {
    languages[i].remove();
  }
}

// enabling input tags
let text = document.querySelector(".main__form-input");
text.disabled = false;
let btnSubmit = document.querySelector(".main__form-btn");
btnSubmit.disabled = false;
let parent = document.querySelector(".main__languages");

// on submit creating element and appending it to left card
function submitForm(event) {
  event.preventDefault();

  if (text.value != "") {
    // console.log(inputValue);
    let newElement = document.createElement("a");
    newElement.setAttribute("target", "_blank");
    newElement.setAttribute("href", "https://www.ineuron.ai");
    let inputValue = text.value;
    newElement.innerHTML = inputValue;
    parent.appendChild(newElement);
  } else {
    alert("Enter text first");
  }
}

btnSubmit.addEventListener("click", submitForm);
```
