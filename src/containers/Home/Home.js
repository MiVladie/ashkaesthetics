import React from 'react';

import Banner from '../../components/Banner/Banner';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Widgets from '../../components/Widgets/Widgets';
import Gallery from '../../components/Gallery/Gallery';
import Testimonials from '../../components/Testimonials/Testimonials';
import Contact from '../../components/Contact/Contact';

import bannerImage from '../../assets/images/promotional/home01.jpg';
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
            main = 'Relaxing is never easy on your own'
            description = 'Come and discover your oasis. It has never been easier to take a break from stress and the harmful factors that surround you every day!'
            linkLeftTo = '/services'
            linkLeftText = 'View services'
            linkRightTo = 'https://fresha.com/'
            linkRightText = 'Book now'
            scrollTo = 'intro' />

        <Section id = 'intro'>
            <Introduction
                id = 'intro'
                main = 'Welcome'
                description = { ['Donec nec mattis turpis. Ut non libero diam. Curabitur malesuada nec neque nec hendrerit. Pellentesque commodo a tellus a feugiat. Cras porta lorem in lorem sodales semper. Sed viverra, sem quis consectetur eleifend, magna orci dictum metus, ut venenatis neque metus ut mi. Pellentesque at fringilla sapien.\nNam mauris est, commodo at nunc nec, venenatis venenatis risus. Aenean molestie ligula at nunc ultrices tincidunt. Sed non aliquam sapien, sed condimentum enim. Morbi id placerat urna. Quisque in ipsum ipsum. Vestibulum non lacus mi. Donec eu mattis lectus. In eleifend vel nisi eget pulvinar. Nam finibus, odio eu faucibus euismod, magna sapien condimentum sem, eget vestibulum turpis mi id massa. Aenean pharetra ligula et quam volutpat, et commodo lorem rutrum.'] } />
        </Section>

        <Section
            background = '#F8F8F8'
            description = 'Donec nec mattis turpis. Ut non libero diam. Curabitur malesuada nec neque nec hendrerit. Pellentesque commodo a tellus a feugiat. Cras porta lorem in lorem sodales semper.'
            linkTo = '/services'
            linkText = 'View services'>
            <Introduction main = 'Services' />
            <Widgets
                data = {[
                    { name: "Microblading", icon: microbladingIcon },
                    { name: "Brows & Lash", icon: browsAndLashIcon },
                    { name: "Waxing", icon: waxingIcon },
                    { name: "Men's Treatments", icon: mensTreatmentsIcon }
                ]} />
        </Section>

        <Section
            linkTo = '/gallery'
            linkText = 'View more'>
            <Introduction
                main = 'Gallery'
                description = 'Donec nec mattis turpis. Ut non libero diam. Curabitur malesuada nec neque nec hendrerit. Pellentesque commodo a tellus a feugiat. Cras porta lorem in lorem sodales semper.' />
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

export default home;
