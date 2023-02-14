// task 1 change color of heading
document.querySelector(".caption h1").style.color = "#dc143c";

//task 2 on mouse enter change the background color
const btnAddToCart = document.querySelector(".add-to-cart");
btnAddToCart.addEventListener("mouseenter", () => {
  btnAddToCart.style.backgroundColor = "#dc143c";
});
btnAddToCart.addEventListener("mouseleave", () => {
  btnAddToCart.style.backgroundColor = "hsl(157, 37%, 20%)";
});
