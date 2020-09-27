import './style.css';
import React from 'react';
import { Form } from 'react-final-form'
import ContactForm from './ContactForm';


class Contact extends React.Component {


    onSubmit(values) {
        console.log("submitting form", values)
    }

    validate(values) {
        if (values && values.firstName && values.firstName.Length < 3) {

            console.log("el nombre debe ser mayor a 3 caracteres")
        }
        if (values && values.mail && values.mail.Length < 5) {

            console.log("el mail debe ser mayor a 5 caracteres")
        }
        if (values && values.consult && values.consult.Length < 10) {

            console.log("la consulta debe ser mas larga")
        }

        console.log("validating form", values)
    }


    render() {
        return (
            <div className="Contact">
                <h1>Contact</h1>
                <Form
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    render={ContactForm}
                />
            </div>
        );
    }
}
export default Contact;
