import React, { useState } from 'react';

import classes from './Input.module.css';

const Input = ({ type, placeholder, value, required, onChange }) => {
    let element;

    switch (type) {        
        case 'textarea': 
            element = 
                <textarea
                    className = { classes.Textarea }
                    placeholder = { placeholder + (required ? '*' : '') }
                    value = { value }
                    onChange = { (event) => onChange(event.target.value) } />
            break;

        default:
            element = 
                <input
                    className = { classes.Input }
                    type = { type }
                    placeholder = { placeholder + (required ? '*' : '') }
                    value = { value }
                    onChange = { (event) => onChange(event.target.value) } />
            break;
    }


    return element
};

export default Input;