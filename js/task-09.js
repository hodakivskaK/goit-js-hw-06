function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку 
// на button.change - color і виводить значення кольору в span.color.



const changedButtonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const descrColorText = document.querySelector(".color");


changedButtonEl.addEventListener("click", (event) => {
  const backColor = bodyEl.style.backgroundColor = `${getRandomHexColor(event)}`;
  descrColorText.textContent = `${backColor}`;
})