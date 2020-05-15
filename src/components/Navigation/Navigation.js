import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';

const Navigation = () => {
    const [scrolled, setScrolled] = useState('');
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
    
    /*window.addEventListener('scroll', () => {
        setScrolled(window.scrollY > 400 ? classes.Scrolled : '');
    });*/

    return (
        <nav className = { [classes.Navigation, scrolled, reveal].join(' ') }>
            <div className = { classes.Upper }>
                <div className = { classes.Social }>
                    <a className = { classes.Facebook } href = 'https://www.facebook.com/ashkaesthetics' target = '_blank' rel = 'noopener noreferrer'> </a>
                    <a className = { classes.Instagram } href = 'https://www.instagram.com/ashk_aesthetics/' target = '_blank' rel = 'noopener noreferrer'> </a>
                </div>

                <Link className = { classes.Logo } to = '/' />

                <div className = { classes.Contacts }>
                    <div className = { classes.Contact }>
                        <img className = { classes.Icon } src = { phone } alt = 'Phone Icon' />
                        <a className = { classes.Info } href = 'tel:07768 105 096'>07768 105 096</a>
                    </div>

                    <div className = { classes.Contact }>
                        <img className = { classes.Icon } src = { email } alt = 'Email Icon' />
                        <a className = { classes.Info } href = 'mailto:ashk.about@gmail.com'>ashk.about@gmail.com</a>
                    </div>
                </div>
            </div>

            <div className = { classes.Line } />

            <div className = { classes.Lower }>
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
                        <a href = 'https://fresha.com/' onClick = { () => menuHandler('off') } target = '_blank' rel = 'noopener noreferrer'>Book now</a>
                    </li>
                </ul>

                <button className = { classes.Menu } onClick = { () => menuHandler('switch') }></button>
            </div>
        </nav>
    )
};

export default Navigation;
