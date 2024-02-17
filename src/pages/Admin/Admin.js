import React, { useState, useEffect } from 'react';

import Section from '../../components/Section/Section';
import Auth from '../../components/Admin/Auth/Auth';
import Inbox from '../../components/Admin/Inbox/Inbox';

const Admin = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        checkingLogin();
    });
  
    const checkingLogin = () => {        
        let token = localStorage.getItem('token');
        let expirationDate = localStorage.getItem('expirationDate');

        if(!token || !expirationDate) {
            return setLoggedIn(false);
        }

        if(expirationDate < new Date()) {
            return setLoggedIn(false);
        }

        if(!loggedIn) {
            return setLoggedIn(true);
        }
    }
    
    return (
        <Section>
            <div style = {{ minHeight: '70vh' }}>{ loggedIn ? <Inbox /> : <Auth login = { checkingLogin } /> }</div>
        </Section>
    );}

export default Admin;
