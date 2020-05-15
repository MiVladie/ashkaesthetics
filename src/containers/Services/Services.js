import React from 'react';

import Banner from '../../components/Banner/Banner';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';

import bannerImage from '../../assets/images/promotional/home02.jpg';

const services = () => (
    <React.Fragment>
        <Banner
            image = { bannerImage }
            imageAlt = 'Beauty Salon Background'
            main = 'Relaxing is never easy on your own'
            description = 'Come and discover your oasis. It has never been easier to take a break from stress and the harmful factors that surround you every day!'
            linkRightTo = 'https://fresha.com/'
            linkRightText = 'Book now'
            scrollTo = 'intro' />

        <Section id = 'intro'>
            <Introduction
                main = 'Our services'
                description = 'Donec nec mattis turpis. Ut non libero diam. Curabitur malesuada nec neque nec hendrerit. Pellentesque commodo a tellus a feugiat. Cras porta lorem in lorem sodales semper. Sed viverra, sem quis consectetur eleifend, magna orci dictum metus, ut venenatis neque metus ut mi.' />
        </Section>
    </React.Fragment>
);

export default services;
