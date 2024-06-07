import { initialiseerToggleNav } from "./src/hamburger.js";
import { checkWindowSize } from "./src/hamburger.js";
import { FormValidator } from "./src/formValidator.js";

// Hamburger menu mobile menu
initialiseerToggleNav()
// Responsive navbar toggle
window.addEventListener("resize", checkWindowSize)



// Formvalidator LoginPagina 
const formLogin = document.querySelector('#login');

if (!formLogin) {
    console.warn('Form is not defined')
}
const formValidatorLogin = new FormValidator(formLogin);

formValidatorLogin.addValidator({
    name: 'email',
    method: field => field.value.trim().match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    message: 'Email is een verplicht veld en werd niet correct ingevuld',
})
formValidatorLogin.addValidator({
    name: 'password',
    method: (field) => field.value.trim().length > 0,
    message: 'Wachtwoord is een verplicht veld en werd niet correct ingevuld' 
})

formLogin.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('Submit gelukt! Geen errors!')
    this.reset()
})
