import { FormValidator } from "../src/formValidator.js";
// Formvalidator LoginPagina 
const verwijderButton = document.querySelector("#verwijder");
const formPosts = document.querySelector('#klus');


verwijderButton.addEventListener('click', function () {
    window.location.href = './index.html'; // Navigeer naar de posts pagina bij klikken op verwijderknop
});

if (!formPosts) {
    console.warn('Form is not defined')
}
const formValidatorPosts= new FormValidator(formPosts);

formValidatorPosts.addValidator({
    name: 'beschrijving',
    method: (field) => field.value.trim().length > 0,
    message: 'Beschrijving van de klus is een verplicht veld en werd niet correct ingevuld',
})
formValidatorPosts.addValidator({
    name: 'locatie',
    method: (field) => {
        const value = field.value.trim();
        const pattern = /^[a-zA-Z\s]+ \d+ [a-zA-Z\s]+ \d{4}$/;
        return pattern.test(value);
    },
    message: 'Locatie is een verplicht veld en werd niet correct ingevuld: (Format example: Ijshoutestraat 72 Balegem 9520)',
})
formValidatorPosts.addValidator({
    name: 'datumtijd',
    method: (field) => {
        const value = field.value.trim();
        return value.length > 0 && !isNaN(Date.parse(value));
    },
    message: 'Datum en tijd aanwezig is een verplicht veld en moet correct ingevuld zijn.',
});

formPosts.addEventListener('submit', function (event) {
    event.preventDefault()

    if (formValidatorPosts.validate()) { // Controleer of het formulier geldig is
        console.log('Submit gelukt! Geen errors!');
        this.reset();
        window.location.href = './index.html'; // Navigeer naar de succespagina
    } else {
        console.log('Formulier heeft validatiefouten.');
    }
})
