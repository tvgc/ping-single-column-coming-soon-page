const form = document.querySelector("form");
const email = document.querySelector("input");
const button = document.querySelector("button");

form.addEventListener('submit', event=>{
    event.preventDefault();

    validateEmail(email);
})

const validateEmail = (email) => {
    if(isValidEmail(email.value)){
        errorMessageDisplayErase(email);
    } else {
        setError(email);        
    }
}


const setError = (element) => {
    const inputControl = element.parentElement;
    inputControl.classList.add('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const errorMessageDisplayErase = (element) => {
    const inputContainer = element.parentElement;
    inputContainer.classList.remove("error")
}