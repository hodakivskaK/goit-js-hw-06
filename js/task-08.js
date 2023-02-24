
const formEl = document.querySelector(".login-form");

// 

function handleSubmit(event) {
    
    event.preventDefault();

    const {
    elements: { email, password }
  } = event.currentTarget;


    if (email.value === "" || password.value === "") {
        alert("Did you forget? please be more carefully");
    }


    const formData = {
        email : email.value,
        password : password.value,
    }
    console.log(formData);

  event.currentTarget.reset();
}

formEl.addEventListener("submit", handleSubmit);

