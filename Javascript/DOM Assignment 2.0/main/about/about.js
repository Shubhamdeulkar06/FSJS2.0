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

// Task 5
