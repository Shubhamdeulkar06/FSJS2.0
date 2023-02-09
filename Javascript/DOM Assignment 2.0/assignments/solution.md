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
