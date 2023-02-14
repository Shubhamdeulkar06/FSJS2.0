// Task-1
const asideContainer = document.querySelector("aside");
asideContainer.style.overflow = "scroll";
let h2Element = document.createElement("h2");
let pElement = document.createElement("p");
let hrElement = document.createElement("hr");
h2Element.setAttribute("class", "new-head");
pElement.setAttribute("class", "new-p");
hrElement.setAttribute("class", "hr-line");
h2Element.innerText = "This is my Custom Heading";
pElement.innerText =
  "Private funding by VC firms is down 50% YOY. We take a look at what that means.";
asideContainer.appendChild(hrElement);
asideContainer.appendChild(h2Element);
asideContainer.appendChild(pElement);

// Task-2
document.body.style.backgroundImage = "none";

//Task-3
const toggleNavbar = document.getElementsByClassName("collapse")[0];
function functionToggle() {
  toggleNavbar.style.transition = "all 2s";
  if (toggleNavbar.style.display === "none") {
    toggleNavbar.style.display = "flex";
  } else {
    toggleNavbar.style.display = "none";
  }
}

let toggleBtn = document.querySelector("nav button");
toggleBtn.addEventListener("click", functionToggle);
