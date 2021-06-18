import React from 'react';

import Banner from '../../components/Banner/Banner';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Widgets from '../../components/Widgets/Widgets';
import Gallery from '../../components/Gallery/Gallery';
import Testimonials from '../../components/Testimonials/Testimonials';
import Contact from '../../components/Contact/Contact';

import bannerImage from '../../assets/images/promotional/page_home.jpg';
import microbladingIcon from '../../assets/icons/microblading.png';
import browsAndLashIcon from '../../assets/icons/brows and lash.png';
import waxingIcon from '../../assets/icons/waxing.png';
import mensTreatmentsIcon from '../../assets/icons/mens treatments.png';
import galleryImage01 from '../../assets/images/gallery/1.jpg';
import galleryImage02 from '../../assets/images/gallery/5.jpg';
import galleryImage03 from '../../assets/images/gallery/9.jpg';

const home = () => (
    <React.Fragment>
        <Banner
            image = { bannerImage }
            imageAlt = 'Beauty Salon Background'
            main = 'Invest in your brows, it is the crown you never take off'
            description = 'Come and discover your oasis. It has never been easier to take a break from stress and the harmful factors that surround you every day!'
            linkLeftTo = '/services'
            linkLeftText = 'View services'
            linkRightTo = 'https://fresha.com/ashk-aesthetics-r6gk2ijg'
            linkRightText = 'Book now'
            scrollTo = 'intro' />

        <Section id = 'intro'>
            <Introduction
                id = 'intro'
                main = 'Welcome to Ashk Aesthetics'
                description = { ['The word Ashk means Love in Turkish...\nThe famous philosopher Confucius said: “Choose a job you love, and you will never have to work a day in your life.”\nI started out in banking, then moved into hospitality management and latterly childcare administration. Alas, my passion for aesthetics led me to beauty therapy and my love for the profession led to the launch of Ashk Aesthetics.\nIt’s common knowledge that success is often not a coincidence, but instead a product of hard work, sacrifice, dedication and the pursuit of perfection!\nI trained at some of London’s top beauty academies to become both a fully qualified beauty therapist and a certified microblading artist.\nAshk Aesthetics offers a range of services which include bespoke Microblading, Eyelash treatments and body waxing.\nAt Ashk Aesthetics, the passion and attention to detail are evidenced by the results and affirmed by customer feedback.\nWhy not drop by and let’s put some joy in your heart and a smile on your face.'] } />
        </Section>

        <Section
            background = '#F8F8F8'
            description = ''
            linkTo = '/services'
            linkText = 'View services'>
            <Introduction main = 'Services' />
            <Widgets
                data = {[
                    { name: "Microblading", icon: microbladingIcon, url: '/services#microblading' },
                    { name: "Eyes & Brows", icon: browsAndLashIcon, url: '/services#eyesandbrows' },
                    { name: "Waxing", icon: waxingIcon, url: '/services#waxing' },
                    { name: "Men's Treatments", icon: mensTreatmentsIcon, url: '/services#menstreatments' }
                ]} />
        </Section>

        <Section
            linkTo = '/gallery'
            linkText = 'View more'>
            <Introduction
                main = 'Gallery'
                description = '' />
            <Gallery
                data = {[ 
                    { image: galleryImage01, alt: 'Eyes & Brows' },
                    { image: galleryImage02, alt: 'Eyes & Brows' },
                    { image: galleryImage03, alt: 'Eyes & Brows' }
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

        <Section>
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

export default home;
