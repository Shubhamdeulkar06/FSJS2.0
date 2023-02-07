let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
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
