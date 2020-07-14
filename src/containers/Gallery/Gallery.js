import React from 'react';

import Banner from '../../components/Banner/Banner';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Gallery from '../../components/Gallery/Gallery';
import Testimonials from '../../components/Testimonials/Testimonials';

import bannerImage from '../../assets/images/promotional/page_gallery.jpg';
import galleryImage01 from '../../assets/images/gallery/1.jpg';
import galleryImage02 from '../../assets/images/gallery/2.jpg';
import galleryImage03 from '../../assets/images/gallery/3.jpg';
import galleryImage04 from '../../assets/images/gallery/4.jpg';
import galleryImage05 from '../../assets/images/gallery/5.jpg';
import galleryImage06 from '../../assets/images/gallery/6.jpg';
import galleryImage07 from '../../assets/images/gallery/7.jpg';
import galleryImage08 from '../../assets/images/gallery/8.jpg';
import galleryImage09 from '../../assets/images/gallery/9.jpg';

const gallery = () => (
    <React.Fragment>
        <Banner
            image = { bannerImage }
            imageAlt = 'Beauty Salon Background'
            main = 'Beauty is good for the soul'
            //description = 'Come and discover your oasis. It has never been easier to take a break from stress and the harmful factors that surround you every day!'
            linkLeftTo = '/services'
            linkLeftText = 'View services'
            linkRightTo = 'https://fresha.com/ashk-aesthetics-r6gk2ijg'
            linkRightText = 'Book now'
            scrollTo = 'intro' />

        <Section id = 'intro'>
            <Introduction
                main = 'Gallery'
                description = '' />
            <Gallery
                data = {[ 
                    { image: galleryImage01, alt: 'Eyes & Brows' },
                    { image: galleryImage02, alt: 'Eyes & Brows' },
                    { image: galleryImage03, alt: 'Eyes & Brows' },
                    { image: galleryImage04, alt: 'Eyes & Brows' },
                    { image: galleryImage05, alt: 'Eyes & Brows' },
                    { image: galleryImage06, alt: 'Eyes & Brows' },
                    { image: galleryImage07, alt: 'Eyes & Brows' },
                    { image: galleryImage08, alt: 'Eyes & Brows' },
                    { image: galleryImage09, alt: 'Eyes & Brows' },
                ]} />
        </Section>
        
        <Section background = '#F8F8F8'>
            <Introduction main = 'Testimonials' />
            <Testimonials
                data = {[
                    { review: "What a great experience and I will definitely go again. This was my first time and having my back waxed in a long time and it really wasn't that painful. There were a couple of times where I said ouch but mostly it was so quick and fairly painless. The experience, care and use of distracting conversation really was 2nd to none. I highly recommend going here. Shukran was brilliant.", author: "Scott" },
                    { review: "I had my eyebrows microbladed at Ashk Aesthetics and was a little nervous about the treatment! Shukran was immensely professional, taking as long as I needed to be completely satisfied with the template. I am so pleased with the result, they look completely natural (which was the look I was trying to achieve) and I will certainly be going back to Ashk for my annual top ups to keep them looking this good! I also use Ashk for waxing and again would 100% recommend Shukran and indeed have to all my local friends!", author: "Sara Bowler" },
                    { review: "Shukran is so passionate about what she does. I am so fussy that I do my own eyebrow because I haven't found anyone that does them better. I had microblading done and I couldn't be happier, everyone asks me about my eyebrows. The salon is pretty, clean and calm. Shukran is warm and genuinely listens to you. I wouldn't hesitate to recommend her as she is great.", author: "Raj" },
                    { review: "What a lovely professional lady! I had my eyebrow waxing & underarm waxing done here with Ashk aesthetics and it was a pain free relaxing experience! I'm very fussy about who I let do my eyebrows as I have had them micro bladed and another lady elsewhere previously messed them up and took away too much hair. She done a brilliant job and assured me that she will listen to my request! The beauty room was very clean and smelt lovely :) Thank you so much will defo recommend you to friends and family! See you again soon. ", author: "Hayley O'toole" },
                ]}/>
        </Section>
    </React.Fragment>
);

export default gallery;
