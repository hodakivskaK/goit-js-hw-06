function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const containerBoxEl = document.querySelector("#boxes");
const inputValueEl = document.querySelector("input")
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');


function createBoxes(amount) {
  let basic = 20;

  for (let number = 1; number <= amount; number += 1){
    const makeBox = document.createElement('div');

    basic += 10;
    makeBox.style.height = basic + "px";
    makeBox.style.width = basic + "px";
    makeBox.style.backgroundColor = getRandomHexColor();
 
    containerBoxEl.append(makeBox);
  }
}


let inputValue = 0;
  inputValueEl.addEventListener("input", event => {
    inputValue = event.currentTarget.value;
})


createBtn.addEventListener('click', () => createBoxes(inputValue));

destroyBtn.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  while (containerBoxEl.firstChild) {
    containerBoxEl.removeChild(containerBoxEl.lastChild)
  }
  
}
