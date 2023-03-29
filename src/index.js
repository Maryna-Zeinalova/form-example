import { validateLenght, validateLetters, validateNumbers, validateEmail, validatePassword} from "mz-form-validation";

const buttonContainer = document.getElementById("button-container");
buttonContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const input = event.target.previousElementSibling;
        const value = input.value;
        let isValid;

        if (input.id == 'length'){
           isValid = validateLenght(value, 4, 10);
           event.target.className = changeButtonColor(isValid);
        }
        if (input.id == 'letters'){
            isValid = validateLetters(value);
            event.target.className = changeButtonColor(isValid);
        }
        if (input.id == 'numbers'){
            isValid = validateNumbers(value);
            event.target.className = changeButtonColor(isValid);
        }
        if (input.id == 'password'){
            isValid = validatePassword(value);
            event.target.className = changeButtonColor(isValid);
        }
        if (input.id == 'email'){
            isValid = validateEmail(value);
            event.target.className = changeButtonColor(isValid);
        }
  }
});

function changeButtonColor (checker){
    if(checker){
       return "btn btn-success"
    } else {
       return 'btn btn-danger'
    }
}
