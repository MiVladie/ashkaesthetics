import React from 'react';

import instagramIcon from '../../assets/icons/instagram.png';
import facebookIcon from '../../assets/icons/facebook.png';
import phoneIcon from '../../assets/icons/phone.png';
import emailIcon from '../../assets/icons/email.png';

import classes from './Footer.module.css';

const footer = () => (
    <footer className = { classes.Footer }>
        <div className = { classes.Line } />

        <div className = { classes.Links }>
            <a
                className = { classes.Link }
                href = 'https://instagram.com/ashk_aesthetics/'
                target = '_blank' rel = 'noopener noreferrer'>
                <img className = { classes.Icon } src = { instagramIcon } alt = 'Instagram Logo' />
            </a>

            <a
                className = { classes.Link }
                href = 'https://facebook.com/ashkaesthetics/'
                target = '_blank' rel = 'noopener noreferrer'>
                <img className = { classes.Icon } src = { facebookIcon } alt = 'Facebook Logo' />
            </a>

            <a
                className = { classes.Link }
                href = 'tel:07768 105 096'>
                <img className = { classes.Icon } src = { phoneIcon } alt = 'Phone Icon' />
            </a>

            <a
                className = { classes.Link }
                href = 'mailto:ashk.about@gmail.com'>
                <img className = { classes.Icon } src = { emailIcon } alt = 'Email Icon' />
            </a>
        </div>

        <p className = { classes.Content }>
            Copyright Ashk Aesthetics &copy; { new Date().getFullYear() } <br className = { classes.Break } /> All Rights Reserved
            <br />
            Website created by <a href = 'https://letscomit.com/' target = '_blank' rel = 'noopener noreferrer'>letscomit</a></p>
    </footer>
);

export default footer;
