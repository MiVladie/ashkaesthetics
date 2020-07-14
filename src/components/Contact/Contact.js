import React, { useState } from 'react';

import Line from '../UI/Line/Line';
import Form from '../Complementary/Form/Form';
import Map from '../Map/Map';
import Animation from '../../hoc/Animation/Animation';

import phoneIcon from '../../assets/icons/phone.png';
import emailIcon from '../../assets/icons/email.png';
import addressIcon from '../../assets/icons/address.png';
import timeIcon from '../../assets/icons/time.png';

import { backendDomain, googleMapsApiKey } from '../../assets/keys';

import axios from 'axios';

import classes from './Contact.module.css';

const Contact = ({ formDescription, contactDescription, phone, email, address, time, coordinates }) => {
    const [response, setResponse] = useState({ message: {}, result: null, loading: false });   

    const sendMessageHandler = (message) => {
        setResponse({ message: message, result: null, loading: true });

        axios.post(backendDomain + 'message/ashkaesthetics', { message: message })
            .then(response => {
                setResponse({ message: null, result: 'Your message has been delivered.', loading: false });                
            })
            .catch(error => {
                setResponse({ ...response, result: 'Something went wrong! Please, try again.', loading: false });
            });
    };

    return (
        <div className = { classes.Contact }>
            <div className = { classes.Row }>
                <div className = { classes.Block }>
                    <Animation style = {{ width: '100%', margin: '0' }}>
                        <h2 className = { classes.Name }>Get in touch</h2>
                        <Line color = '#B8925D' style = {{ marginLeft: 0, marginRight: 0 }} />
                        <p className = { classes.Description }>{ formDescription }</p>
                    </Animation>
                    
                    <Animation style = {{ width: '100%', margin: '0' }}>
                        <div className = { classes.Form }>
                            <Form
                                data = {[
                                    { name: 'name', placeholder: 'Your name', type: 'text', required: true },
                                    { name: 'email', placeholder: 'Your email', type: 'email', required: true },
                                    { name: 'phone', placeholder: 'Your phone', type: 'tel', required: false },
                                    { name: 'message', placeholder: 'Write message', type: 'textarea', required: true },
                                ]}
                                button = 'Send message'
                                onSubmit = { sendMessageHandler }
                                inputs = { response.message }
                                response = { response.result }
                                loading = { response.loading } />
                        </div>
                    </Animation>
                </div>
                
                <div className = { classes.Block }>
                    <Animation style = {{ width: '100%', margin: '0' }}>
                        <h2 className = { classes.Name }>Contact us</h2>
                        <Line color = '#B8925D' style = {{ marginLeft: 0, marginRight: 0 }} />
                        <p className = { classes.Description }>{ contactDescription }</p>
                    </Animation>

                    <Animation style = {{ width: '100%', margin: '0' }}>
                        <div className = { classes.Methods }>
                            { phone && <div className = { classes.Method }>
                                <Animation style = {{ width: '100%', margin: '0' }}>
                                    <img className = { classes.Icon } src = { phoneIcon } alt = 'Phone Icon' />
                                    <p className = { classes.Info }>{ phone }</p>
                                </Animation>
                            </div> }
                            
                            { email && <div className = { classes.Method }>
                                <Animation style = {{ width: '100%', margin: '0' }}>
                                    <img className = { classes.Icon } src = { emailIcon } alt = 'Email Icon' />
                                    <p className = { classes.Info }>{ email }</p>
                                </Animation>
                            </div> }
                            
                            { address && <div className = { classes.Method }>
                                <Animation style = {{ width: '100%', margin: '0' }}>
                                    <img className = { classes.Icon } src = { addressIcon } alt = 'Address Icon' />
                                    <p className = { classes.Info }>{ address }</p>
                                </Animation>
                            </div> }
                            
                            { time && <div className = { classes.Method }>
                                <Animation style = {{ width: '100%', margin: '0' }}>
                                    <img className = { classes.Icon } src = { timeIcon } alt = 'Time Icon' />
                                    <p className = { classes.Info }>{ time }</p>
                                </Animation>
                            </div> }
                        </div>
                    </Animation>
                    
                </div>
            </div>
            
            { coordinates && <div className = { classes.Map }>
                <Map 
                    location = { coordinates }
                    zoom = { 15 }
                    googleMapURL = { "https://maps.googleapis.com/maps/api/js?key=" + googleMapsApiKey }
                    loadingElement = { <div style = {{ height: `100vh`, width: '100vw' }} /> } />
            </div> }
        </div>
    )
};

export default Contact;
