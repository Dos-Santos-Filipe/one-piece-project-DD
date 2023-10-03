const btns = document.querySelectorAll(".btn");

const chars = document.querySelectorAll(".char");

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    deselectBtn();
    deselectChar();

    btn.classList.add("selected");
    chars[i].classList.add("selected");
  });
});

function deselectChar() {
  const selectedChar = document.querySelector(".char.selected");
  selectedChar.classList.remove("selected");
}

function deselectBtn() {
  const selectedBtn = document.querySelector(".btn.selected");
  selectedBtn.classList.remove("selected");
}
