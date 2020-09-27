import './style.css'
import React from 'react'
import { Field } from 'react-final-form'

function ContactForm(props) {

    return (
        <form className="ContactForm" onSubmit={props.handleSubmit}>
            <h3>Formulario de Contacto</h3>
            <div>
                <label>nombre y apellido</label>
                <Field name="nombre" component="input" placeholder="nombre" />
            </div>
            <div>
                <label>mail</label>
                <Field mail="email" component="input" placeholder="email" />
            </div>
            <div>
                <label>consulta</label>
                <Field consult="consulta" component="input" placeholder="mensaje..." />
            </div>

            <button type="submit">Enviar</button>
        </form>
    )

}


export default ContactForm

