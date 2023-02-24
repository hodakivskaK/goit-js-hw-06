
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('span#value');


incrementBtnEl.addEventListener("click", () => {
  console.log("Button was clicked");
});

let counterValue = 0;

decrementBtnEl.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent =  counterValue;
});

incrementBtnEl.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});