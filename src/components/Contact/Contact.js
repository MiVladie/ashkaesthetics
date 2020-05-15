import React from 'react';

import Line from '../UI/Line/Line';
import Form from '../Form/Form';
import Map from '../Map/Map';

import phoneIcon from '../../assets/icons/phone.png';
import emailIcon from '../../assets/icons/email.png';
import addressIcon from '../../assets/icons/address.png';
import timeIcon from '../../assets/icons/time.png';

import classes from './Contact.module.css';

import { googleMapsApiKey } from '../../assets/keys';

const contact = ({ description, phone, email, address, time, coordinates }) => (
    <div className = { classes.Contact }>
        <div className = { classes.Row }>
            <div className = { classes.Block }>
                <h2 className = { classes.Name }>Get in touch</h2>
                <Line color = '#B8925D' style = {{ marginLeft: 0, marginRight: 0 }} />
                <div className = { classes.Form }>
                    <Form
                        data = {[
                            { name: 'name', placeholder: 'Your name', type: 'text', required: true },
                            { name: 'email', placeholder: 'Your email', type: 'email', required: true },
                            { name: 'phone', placeholder: 'Your phone', type: 'tel', required: false },
                            { name: 'message', placeholder: 'Write message', type: 'textarea', required: true },
                        ]}
                        button = 'Send message' />
                </div>
            </div>
            
            <div className = { classes.Block }>
                <h2 className = { classes.Name }>Contact us</h2>
                <Line color = '#B8925D' style = {{ marginLeft: 0, marginRight: 0 }} />
                <p className = { classes.Description }>{ description }</p>

                <div className = { classes.Methods }>
                    { phone && <div className = { classes.Method }>
                        <img className = { classes.Icon } src = { phoneIcon } alt = 'Phone Icon' />
                        <p className = { classes.Info }>{ phone } </p>
                    </div> }
                    
                    { email && <div className = { classes.Method }>
                        <img className = { classes.Icon } src = { emailIcon } alt = 'Email Icon' />
                        <p className = { classes.Info }>{ email } </p>
                    </div> }
                    
                    { address && <div className = { classes.Method }>
                        <img className = { classes.Icon } src = { addressIcon } alt = 'Address Icon' />
                        <p className = { classes.Info }>{ address } </p>
                    </div> }
                    
                    { time && <div className = { classes.Method }>
                        <img className = { classes.Icon } src = { timeIcon } alt = 'Time Icon' />
                        <p className = { classes.Info }>{ time } </p>
                    </div> }
                </div>
                
            </div>
        </div>
        
        <div className = { classes.Map }>
            <Map 
                location = { coordinates }
                zoom = { 15 }
                googleMapURL = { "https://maps.googleapis.com/maps/api/js?key=" + googleMapsApiKey }
                loadingElement = { <div style = {{ height: `100vh`, width: '100vw' }} /> } />
        </div>
    </div>
);

export default contact;
