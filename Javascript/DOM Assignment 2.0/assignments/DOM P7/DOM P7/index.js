let languages = document.querySelectorAll(".main__languages a");
for (let i = 0; i < languages.length; i++) {
  if (languages[i].innerText.includes("2.0")) {
    languages[i].style.display = "none";
  }
}

// enabling input
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
