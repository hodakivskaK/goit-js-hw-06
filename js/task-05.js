const inputEl = document.querySelector("input#name-input");

const outputEl = document.querySelector("span#name-output");

inputEl.addEventListener("input", (event) => {

    if (event.currentTarget.value.length !== 0) {
        return outputEl.textContent = event.currentTarget.value.trim()
    } 
    return outputEl.textContent = "Anonymous";
} 
    );

    