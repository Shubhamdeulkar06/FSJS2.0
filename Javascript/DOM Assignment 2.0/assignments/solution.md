# DOM Assignments 2.0

## Assignment 1

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

![Task 1](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)

### Task1 solution

```JavaScript
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
