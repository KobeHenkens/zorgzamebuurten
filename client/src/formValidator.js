
    export class FormValidator {
        validators = [];
        errors = [];

        constructor(form) {
            this.form = form;
            // We gebruiken hier een arrow functie omdat this binnen de onSubmit-methode altijd naar de juiste FormValidator-instantie verwijst
            this.form.addEventListener('submit', (event) => this.onSubmit(event))
        }

        onSubmit(event) {
            this.resetSummary();
            this.removeInlineErros();

            if (!this.validate()) {
                event.preventDefault();
                event.stopPropagation();
            }

            this.showSummary();
            this.showInlineErrors();
        }

        validate() {
            this.errors = [];
            this.validators.forEach(validator => {

                if (this.errors.find(error => error.name === validator.field)) {
                    return
                }

                if (!validator.method(validator.field)) {
                    this.errors.push(validator)
                }
            })
            return this.errors.length === 0;
        }

        addValidator(validator) {
            this.validators.push(
                {
                    ...validator,
                    field: this.form.elements[validator.name]
                }
            )
        }
        

        createInlineError(error) {
            const span = document.createElement('span');
            
            span.className = 'field-error';
            span.innerText = error.message;
            span.id = `${error.name}-error`;

            return span;

        }

        showInlineErrors() {
            this.errors.forEach(error => {
                const errorElement = this.createInlineError(error);

                if (error.field instanceof Node) {
                    error.field.classList.add('invalid')
                    error.field.setAttribute('aria-invalid', 'true')
                    // voeg het error element toe aan het label
                    const label = error.field.closest('label')
                    if (label) {
                        label.appendChild(errorElement)
                    }
                    error.field.classList.add('invalid');
                    error.field.setAttribute('aria-invalid', true);
            
                    const fieldLabels = error.field.labels;
                    const firstLabel = fieldLabels[0];
            
                    if (firstLabel) {
                        firstLabel.appendChild(errorElement);
                    }
                } else if (error.field instanceof NodeList) {
                    error.field.forEach(node => {
                        node.classList.add('invalid')
                        node.setAttribute('aria-invalid', 'true')
                        node.setAttribute('aria-describedby', errorElement.id)
                    })
                    // dichtsbijzijnde fieldset
                    const fieldSet = error.field[0].closest('fieldset')
                    const legend = fieldSet?.querySelector('legend')
                    if (legend) {
                        legend.appendChild(errorElement)
                    }
                }
                    
            })
        }

        removeInlineErros() {
            this.form.querySelectorAll('.field-error').forEach(element => element.remove())

            this.form.querySelectorAll('.invalid').forEach(element =>{
                element.removeAttribute('aria-invalid')
                element.removeAttribute('aria-describedby')
                element.classList.remove('invalid')
            })
        }

        showSummary() {
            const errorSummary = document.querySelector('.errorSummary');
            const errorList = errorSummary.querySelector('ul');
            errorList.innerHTML = '';
    
            if (this.errors.length > 0) {
                this.errors.forEach(error => {
                    const li = document.createElement('li');
                    li.innerText = error.message;
                    li.id = `${error.name}-error-summary`;
                    errorList.appendChild(li);
                });
                errorSummary.style.display = 'block';
                errorSummary.tabIndex = '0';
                errorSummary.focus();
            } else {
                errorSummary.style.display = 'none';
                errorSummary.removeAttribute('tabindex');
            }
        }

        resetSummary() {
            this.errors = [];
            const errorSummary = document.querySelector('.errorSummary');
            errorSummary.style.display = 'none';
            errorSummary.removeAttribute('tabindex');
        }

    }






