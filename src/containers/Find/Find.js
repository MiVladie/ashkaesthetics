import React from 'react';

import Banner from '../../components/Banner/Banner';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Contact from '../../components/Contact/Contact';

import bannerImage from '../../assets/images/promotional/page_contact.jpg';

const find = () => (
    <React.Fragment>
        <Banner
            image = { bannerImage }
            imageAlt = 'Beauty Salon Background'
            //main = 'Invest in your brows, it is the crown you never take off'
            //description = 'Come and discover your oasis. It has never been easier to take a break from stress and the harmful factors that surround you every day!'
            linkLeftTo = '/services'
            linkLeftText = 'View services'
            linkRightTo = 'https://fresha.com/ashk-aesthetics-r6gk2ijg'
            linkRightText = 'Book now'
            scrollTo = 'intro' />

        <Section id = 'intro'>
            <Introduction
                main = 'Find us'
                description = '' />
            <Contact
                formDescription = 'For all inquiries please get in touch with us.'
                contactDescription = ''
                phone = '07768 105 096'
                email = 'ask@ashk-aesthetics.co.uk'
                address = '10 Bond Street, Ealing, London W5 5AA'
                time = 'Wed-Sat: 9:30 AM - 6:00 PM'
                coordinates = {{ lat: 51.512333, lng: -0.30616 }} />
        </Section>
    </React.Fragment>
);

export default find;
