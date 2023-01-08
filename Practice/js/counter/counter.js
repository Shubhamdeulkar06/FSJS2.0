const incrementBtn = document.querySelector("#increment");

const decrementBtn = document.querySelector("#decrement");
const counterEl = document.getElementById("counter");
const ulElement = document.getElementById("list-items");

let counter = 0;
function incrementCounter() {
  counter++;
  counterEl.innerText = counter;

  // create an element
  const li = document.createElement("li");
  li.setAttribute("data-counter", counter);
  li.innerHTML = "<b>Sentence </b> " + counter;
  console.log(li);

  // append tht element
  ulElement.appendChild(li);
  // console.log(counter);
}

function decrementCounter() {
  const li = ulElement.querySelector('[data-counter="' + counter + '"]');
  li.remove();
  counter--;
  counterEl.innerText = counter;
  // console.log(counter);
}

incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);
