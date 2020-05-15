import React from 'react';

import Banner from '../../components/Banner/Banner';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Contact from '../../components/Contact/Contact';

import bannerImage from '../../assets/images/promotional/home04.jpg';

const find = () => (
    <React.Fragment>
        <Banner
            image = { bannerImage }
            imageAlt = 'Beauty Salon Background'
            main = 'Relaxing is never easy on your own'
            description = 'Come and discover your oasis. It has never been easier to take a break from stress and the harmful factors that surround you every day!'
            linkLeftTo = '/services'
            linkLeftText = 'View services'
            linkRightTo = 'https://fresha.com/'
            linkRightText = 'Book now'
            scrollTo = 'intro' />

        <Section id = 'intro'>
            <Introduction
                main = 'Find us'
                description = 'Donec nec mattis turpis. Ut non libero diam. Curabitur malesuada nec neque nec hendrerit. Pellentesque commodo a tellus a feugiat. Cras porta lorem in lorem sodales semper.' />
            <Contact
                description = 'Donec nec mattis turpis. Ut non libero diam. Curabitur malesuada nec neque nec hendrerit. Pellentesque commodo a tellus a feugiat. Cras porta lorem in lorem sodales semper.'
                phone = '07768 105 096'
                email = 'ashk.about@gmail.com'
                address = 'Luxx Hair, 43 High St, Ealing, London W5 5DB'
                time = 'Wed-Sat: 9:30 AM - 6:00 PM'
                coordinates = {{ lat: 51.5127901, lng: -0.3069276 }} />
        </Section>
    </React.Fragment>
);

export default find;
