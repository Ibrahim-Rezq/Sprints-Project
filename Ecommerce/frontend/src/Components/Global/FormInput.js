import React from 'react'

import classes from './css/FormInput.module.css'

function FormInput(props) {
    return (
        <div className={classes.input + ' ' + props.classes}>
            <label htmlFor={props.inputId}>{props.label}</label>
            <input
                type={props.inputType}
                id={props.inputId}
                onChange={props.inputFunc}
                name={props.inputName}
            />
        </div>
    )
}

export default FormInput
