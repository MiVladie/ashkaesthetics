import React from 'react';

import Banner from '../../components/Banner/Banner';

import bannerImage from '../../assets/images/promotional/page_404.jpg';

const notFound = () => (
    <Banner
        image = { bannerImage }
        imageAlt = 'Beauty Salon Background'
        main = 'Page not found!'
        description = 'The page you are looking for does not exist or an other error occured! Go back, or head over to ashk-aesthetics.co.uk to choose a new direction.'
        linkLeftTo = '/'
        linkLeftText = 'Go to home' />
);

export default notFound;
