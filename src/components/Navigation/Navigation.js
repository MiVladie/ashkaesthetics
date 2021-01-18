import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import classes from './Navigation.module.scss';

import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';

const Navigation = () => {
    const [reveal, setReveal] = useState('');

    const menuHandler = (turn) => {
        if(turn === 'on') {
            document.body.style.overflow = 'hidden';
            setReveal(classes.Reveal);
        }

        if(turn === 'off') {
            document.body.style.overflow = 'visible';
            setReveal('');
        }

        if(turn === 'switch') {
            document.body.style.overflow = reveal === classes.Reveal ? 'visible' : 'hidden';
            setReveal(reveal === classes.Reveal ? '' : classes.Reveal);
        }
    };
    
    let upper = <div className = { classes.Upper }>
        <div className = { classes.Social }>
            <a className = { classes.Facebook } href = 'https://www.facebook.com/ashkaesthetics' target = '_blank' rel = 'noopener noreferrer'> </a>
            <a className = { classes.Instagram } href = 'https://www.instagram.com/ashk_aesthetics/' target = '_blank' rel = 'noopener noreferrer'> </a>
        </div>

        <Link className = { classes.Logo } to = '/' />

        <div className = { classes.Contacts }>
            <div className = { classes.Contact } onClick = { () => window.location.assign('tel:07768 105 096') }>
                <img className = { classes.Icon } src = { phone } alt = 'Phone Icon' />
                <p className = { classes.Info }>07768 105 096</p>
            </div>

            <div className = { classes.Contact } onClick = { () => window.location.assign('mailto:ask@ashk-aesthetics.co.uk') }>
                <img className = { classes.Icon } src = { email } alt = 'Email Icon' />
                <p className = { classes.Info }>ask@ashk-aesthetics.co.uk</p>
            </div>
        </div>
    </div>;

    let lower = <nav className = { [classes.Lower, reveal].join(' ') }>
        <div className = { classes.Social }>
            <a className = { classes.Facebook } href = 'https://www.facebook.com/ashkaesthetics' target = '_blank' rel = 'noopener noreferrer'> </a>
            <a className = { classes.Instagram } href = 'https://www.instagram.com/ashk_aesthetics/' target = '_blank' rel = 'noopener noreferrer'> </a>
            <a className = { classes.Phone } href = 'tel:07768 105 096'> </a>
        </div>

        <Link className = { classes.Logo } to = '/' onClick = { () => menuHandler('off') } />

        <ul className = { classes.Links }>
            <li className = { classes.Link }>
                <NavLink to = '/' exact activeClassName = { classes.Active } onClick = { () => menuHandler('off') }>
                    Home
                    <div className = { classes.Underline } />
                </NavLink>
            </li>
            
            <li className = { classes.Link }>
                <NavLink to = '/services' activeClassName = { classes.Active } onClick = { () => menuHandler('off') }>
                    Services
                    <div className = { classes.Underline } />
                </NavLink>
            </li>
            
            <li className = { classes.Link }>
                <NavLink to = '/gallery' activeClassName = { classes.Active } onClick = { () => menuHandler('off') }>
                    Gallery & Testimonials
                    <div className = { classes.Underline } />
                </NavLink>
                
            </li>
            
            <li className = { classes.Link }>
                <NavLink to = '/find-us' activeClassName = { classes.Active } onClick = { () => menuHandler('off') }>
                    Find us
                    <div className = { classes.Underline } />
                </NavLink>
            </li>
            
            <li className = { [classes.Link, classes.Book].join(' ') }>
                <a href = 'https://fresha.com/ashk-aesthetics-r6gk2ijg' onClick = { () => menuHandler('off') } target = '_blank' rel = 'noopener noreferrer'>Book now</a>
            </li>
        </ul>

        <button className = { classes.Menu } onClick = { () => menuHandler('switch') }></button>
    </nav>;

    return (
        <React.Fragment>
            { upper }

            <div className = { classes.Line } />

            { lower }
        </React.Fragment>
    )
};

export default Navigation;
