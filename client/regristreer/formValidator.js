import { FormValidator } from "../src/formValidator.js";
// Formvalidator RegistreerPagina

const formRegistreer = document.querySelector('#registreer');

if (!formRegistreer) {
    console.warn('Form is not defined')
}
const formValidatorRegistreer = new FormValidator(formRegistreer);

formValidatorRegistreer.addValidator({
    name: 'volledigenaam',
    method: (field) => field.value.trim().length > 0,
    message: 'Volledige naam is een verplicht veld en werd niet correct ingevuld',
})
formValidatorRegistreer.addValidator({
    name: 'email',
    method: field => field.value.trim().match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    message: 'Email is een verplicht veld en werd niet correct ingevuld',
})
formValidatorRegistreer.addValidator({
    name: 'password',
    method: (field) => field.value.trim().length > 0,
    message: 'Wachtwoord is een verplicht veld en werd niet correct ingevuld' 
})

formRegistreer.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('Submit gelukt! Geen errors!')
    this.reset()
})
