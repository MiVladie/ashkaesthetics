import React, { useState } from 'react';

import Input from '../Form/Input/Input';
import Spinner from '../UI/Spinner/Spinner';

import { isFormValid } from '../../util/formValidation';
import { backendDomain } from '../../assets/keys';

import axios from 'axios';
import classes from './Form.module.css';

const Form = ({ data, button }) => {
    const [message, setMessage] = useState({});
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);

    const submitHandler = () => {
        let err = isFormValid(data, message);

        if(err == null) {
            setLoading(true);
            
            message.time = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes();
            Object.keys(message).map(input => { message[input] = message[input] === '' ? null : message[input]; });

            axios.post(backendDomain + 'message/ashkaesthetics', { message: message })
                .then(response => {
                    setLoading(false);
                    setResult('Your message has been delivered.');
                    setMessage({});
                })
                .catch(error => {
                    setResult('Something went wrong! Please, try again.');
                    setLoading(false);
                });
        } else {
            setResult(err);
        }
    };

    return (
        <div className = { classes.Form }>
            { loading && <div className = { classes.Modal }><Spinner /></div> }

            <form className = { classes.Area }>
                { data.map(input =>
                    <Input
                        type = { input.type }
                        placeholder = { input.placeholder }
                        required = { input.required }
                        value = { message[input.name] != null ? message[input.name] : '' }
                        onChange = { (value) => setMessage({...message, [input.name]: value }) } />) }
            </form>

            { result && <p className = { classes.Result }>{ result }</p> }

            <button
                className = { classes.Submit }
                onClick = { submitHandler }
                disabled = { loading }>
                { button }
            </button>
        </div>
    )
};

export default Form;
