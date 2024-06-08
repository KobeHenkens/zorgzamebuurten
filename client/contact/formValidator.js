import { FormValidator } from "../src/formValidator.js";
// Formvalidator LoginPagina 
const formContact = document.querySelector('#contact');

if (!formContact) {
    console.warn('Form is not defined')
}
const formValidatorContact= new FormValidator(formContact);

formValidatorContact.addValidator({
    name: 'volledigenaam',
    method: (field) => field.value.trim().length > 0,
    message: 'Volledige naam is een verplicht veld en werd niet correct ingevuld',
})
formValidatorContact.addValidator({
    name: 'email',
    method: field => field.value.trim().match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    message: 'Email is een verplicht veld en werd niet correct ingevuld',
})
formValidatorContact.addValidator({
    name: 'bericht',
    method: (field) => field.value.trim().length > 0,
    message: 'Bericht is een verplicht veld en werd niet correct ingevuld' 
})

formContact.addEventListener('submit', function (event) {
    event.preventDefault()

    if (formValidatorContact.validate()) { // Controleer of het formulier geldig is
        console.log('Submit gelukt! Geen errors!');
        this.reset();
        window.location.href = 'formSucces.html'; // Navigeer naar de succespagina
    } else {
        console.log('Formulier heeft validatiefouten.');
    }
})
