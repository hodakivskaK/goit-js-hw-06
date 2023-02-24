const inputValidationEl = document.querySelector('input#validation-input');


inputValidationEl.addEventListener('blur', (event) => {
    // console.log("event.currentTarget.value.length", event.currentTarget.value.length,
    //     "Number(inputValidationEl.dataset.length", Number(inputValidationEl.dataset.length))
    if ( event.currentTarget.value.length !== Number(inputValidationEl.dataset.length)) {
        
        return inputValidationEl.classList.add("invalid");
    } 
    inputValidationEl.classList.replace("invalid","valid");
 
   
}
)