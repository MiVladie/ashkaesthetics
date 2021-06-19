import React from 'react';

import Banner from '../../components/Banner/Banner';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Informative from '../../components/Informative/Informative';
import Descriptive from '../../components/Complementary/Descriptive/Descriptive';
import Catalog from '../../components/Complementary/Catalog/Catalog';

import bannerImage from '../../assets/images/promotional/page_services.jpg';
import microbladingImage from '../../assets/images/promotional/microblading.jpg';
import browsAndLashImage from '../../assets/images/promotional/eyes & brows.jpg';
import microbladingImage02 from '../../assets/images/promotional/microblading02.jpg';
import eyesAndBrowsImage from '../../assets/images/promotional/eyes & brows 2.jpg';
import waxingImage from '../../assets/images/promotional/waxing.jpg';
import mensTreatmentsImage from '../../assets/images/promotional/mens treatments.jpg';
import packagesImage from '../../assets/images/promotional/packages.jpg';

const services = () => (
    <React.Fragment>
        <Banner
            image = { bannerImage }
            imageAlt = 'Beauty Salon Background'
            main = 'If it makes you feel beautiful, then do it'
            //description = 'Come and discover your oasis. It has never been easier to take a break from stress and the harmful factors that surround you every day!'
            linkRightTo = 'https://fresha.com/ashk-aesthetics-r6gk2ijg'
            linkRightText = 'Book now'
            scrollTo = 'intro' />

        <Section id = 'intro'>
            <Introduction
                main = 'Our services'
                description = '' />
        </Section>

        <Section background = '#F8F8F8'>
            <Informative
                image = { microbladingImage }
                main = 'Microblading'
                linkTo = '/services/microblading'
                linkText = 'Learn more'
                reversed>
                <Descriptive
                    data = {[
                        { name: 'What is microblading?', description: 'Microblading is a semi-permanent makeup procedure that dramatically corrects or fully construct/reconstruct lost eyebrow hairs. It looks so real, it is often referred to as 3D or hairstroke tattoo. It can help define, shape, and create fullness in the eyebrow area.' },
                        { name: 'Benefits of eyebrow microblading', description: 'It gives you long-lasting results. Think of it like a tattoo that gives you the brows of your dreams. You will only need to get your brows microbladed once every one and a half to two years. It is an easy solution for people who have lost their brows due to over plucking, an illness, or chemotherapy.' }
                    ]} />
            </Informative>
        </Section>

        <Section>
            <Informative
                image = { browsAndLashImage }
                main = 'Eyes & Brows'                
                linkTo = '/services/eyes-and-brows'
                linkText = 'Learn more'>
                <Descriptive
                    data = {[
                        { name: 'Brow lamination', description: 'Brow Lamination is a salon treatment which involves restructuring brow hairs to keep them in their desired shape. Naturally fuller brows which can be tailored to suit any brow preference.' },
                        { description: 'Brows can be worn brushed up or down depending on your style. Brow Lamination treatments are proving extremely popular thanks to their amazing results which last up to 8 weeks.' },
                        { description: 'This treatment takes  30- 45 minutes and will give the appearance of thicker brows that are expertly styled into your desired shape.' },
                        { name: 'Lash Lift', description: 'A lash lift is a bit like an eyelash perm and gives the same effect as using an eyelash curler. it lasts 8-12 week and is suitable for clients no matter what their lash length. It’s a very low maintenance lash service. It means you can also use your normal makeup, mascara and makeup remover.' }
                    ]} />
            </Informative>
        </Section>       
        
        <Section background = '#F8F8F8'>
            <Introduction
                main = 'Price list'
                description = '' />
        
            <Informative
                id = 'microblading'
                image = { microbladingImage02 }
                main = "Microblading"
                description = ''>
                <Catalog
                    data = {[
                        { name: 'Microblading (Inc. Consultation, Patch Test, After Care Ointment)', time: 180, price: 250 },
                        { name: 'Annual Touch Up', time: 90, price: 130 }
                    ]}
                    maxVisible = { 5 }
                    expandText = 'View more'
                    collapseText = 'View less'
                    linkTo = 'https://fresha.com/ashk-aesthetics-r6gk2ijg'
                    linkText = 'Book now' />
            </Informative>

            <Informative
                id = 'eyesandbrows'
                image = { eyesAndBrowsImage }
                main = "Eyes & Brows"
                description = ''
                reversed>
                <Catalog
                    data = {[
                        { name: 'Brow Lamination', time: 45, price: 40 },
                        { name: 'Brow Lamination & Tint', time: 60, price: 43 },
                        { name: 'Brow Lamination With Tint & Shape', time: 75, price: 48 },
                        { name: 'Lash Lift & Tint', time:  60, price: 40 },
                        { name: 'Eyebrow Shape & Tint', time: 30 , price: 13 },
                        { name: 'Eyebrow & Lash Tint', time:  30, price: 15 },
                        { name: 'Eyelash Tint', time:  30, price: 10 },
                        { name: 'Eyebrow Tint', time:  15, price: 8 },
                        { name: 'Eyebrow Wax (Strip)', time:  15, price: 8 }
                    ]}
                    maxVisible = { 5 }
                    expandText = 'View more'
                    collapseText = 'View less'
                    linkTo = 'https://fresha.com/ashk-aesthetics-r6gk2ijg'
                    linkText = 'Book now' />
            </Informative>
            
            <Informative
                id = 'waxing'
                image = { waxingImage }
                main = "Waxing"
                description = ''>
                <Catalog
                    data = {[
                        { name: 'Half Leg (Lower)', time: 15, price: 14 },
                        { name: 'Half Leg (Upper)', time: 30, price: 16 },
                        { name: 'Full Leg Wax', time: 45, price: 22 },
                        { name: 'Full Arm Wax', time:  30, price: 15 },
                        { name: 'Under Arm Wax (Hot)', time:  15, price: 12 },
                        { name: 'Under Arm Wax (Strip)', time:  15, price: 9 },
                        { name: 'Half Arm Wax', time: 15, price: 10 },
                        { name: 'Hollywood Wax (Hot)', time: 30, price: 28 },
                        { name: 'Ext. Bikini Wax (Hot)', time: 20, price: 23 },
                        { name: 'Ext. Bikini Wax (Strip)', time: 20, price: 18 },
                        { name: 'Bikini Line (Strip) ', time: 15, price: 10 },
                        { name: 'Bikini Line Wax (Hot)', time: 15, price: 13 },
                        { name: 'Stomach Wax', time: 15, price: 10 },
                        { name: 'Back Wax', time:  30, price: 12 },
                        { name: 'Upper Lip / Chin (Strip)', time: 15, price: 5 },
                        { name: 'Upper Lip / Chin Wax (Hot)', time: 15, price: 7 },
                        { name: 'Upper Lip/Chin (Strip) ', time: 15, price: 5 },
                        { name: 'Upper Lip/Chin Wax (Hot) ', time: 15, price: 7 },
                        { name: 'Side Wax (Hot)', time: 15, price: 9 },
                        { name: 'Side Wax (Strip)', time: 15, price: 7 },
                        { name: 'Full Face (Strip)(Ex. Brows)', time: 30, price: 17 },
                        { name: 'Full Face Wax (Hot)(Ex. Brow)', time: 30, price: 24 }
                    ]}
                    maxVisible = { 5 }
                    expandText = 'View more'
                    collapseText = 'View less'
                    linkTo = 'https://fresha.com/ashk-aesthetics-r6gk2ijg'
                    linkText = 'Book now' />
            </Informative>
            
            <Informative
                id = 'menstreatments'
                image = { mensTreatmentsImage }
                main = "Men's Treatments"
                description = ''
                reversed>
                <Catalog
                    data = {[
                        { name: 'Brow Lamination', time: 60, price: 50 },
                        { name: 'Lash Lift', time: 60, price: 50 },
                        { name: 'Eyebrow Shape', time: 25, price: 10 },
                        { name: 'Full Leg', time: 60, price: 30 },
                        { name: 'Half Leg', time: 45, price: 18 },
                        { name: 'Full Arm Wax', time: 30, price: 20 },
                        { name: 'Half Arm Wax', time: 15, price: 15 },
                        { name: 'Chest & Abs (Hot)', time: 60, price: 37 },
                        { name: 'Chest & Abs', time: 30, price: 25 },
                        { name: 'Back & Shoulders (Hot)', time: 60, price: 38 },
                        { name: 'Back & Shoulder Wax (Strip)', time: 30, price: 27 }
                    ]}
                    maxVisible = { 5 }
                    expandText = 'View more'
                    collapseText = 'View less'
                    linkTo = 'https://fresha.com/ashk-aesthetics-r6gk2ijg'
                    linkText = 'Book now' />
            </Informative>
            
            <Informative
                image = { packagesImage }
                main = "Packages"
                description = ''>
                <Catalog
                    data = {[
                        { name: 'Lash Lift + Brow Lamination', price: 75, oldPrice: 105 },
                        { name: 'Eyebrow Shape & Tint And Eyelash Tint ', price: 21 },
                        { name: 'Full Leg And Hollywood (Hot Wax)', price: 47, oldPrice: 50  },
                        { name: 'Full Leg And Bikini (Hot)', price: 35 },
                        { name: 'Full Leg And Bikini (Strip)', price: 32 },
                        { name: 'Full Leg And Extended Bikini (Hot Wax)', price: 45 },
                        { name: 'Full Leg And Extended Bikini (Strip Wax)', price: 42 },
                        { name: 'Full Leg, Extended Bikini And Under Arm (Hot Wax)', price: 54, oldPrice: 57 },
                        { name: 'Full Leg, Extended Bikini And Under Arm (Strip Wax)', price: 48, oldPrice: 49 },
                        { name: 'Full Leg, Full Arm, Extended Bikini And Under Arm (Hot Wax)', price: 64, oldPrice: 72 },
                        { name: 'Full Leg, Full Arm, Extended Bikini And Under Arm (Strip Wax)', price: 60, oldPrice: 64 },
                        { name: 'Hollywood, Full leg, Full Arm, Under Arm (Hot Wax)', price: 69, oldPrice: 77 },
                        { name: 'Hollywood, Full leg, Full Arm, Under Arm (Strip Wax)', price: 67, oldPrice: 74 },
                        { name: 'Full Body Wax (Full Leg, Full Arm, Under Arm, Hollywood, Back And Stomach)', price: 80, oldPrice: 99 }
                    ]}
                    maxVisible = { 5 }
                    expandText = 'View more'
                    collapseText = 'View less'
                    linkTo = 'https://fresha.com/ashk-aesthetics-r6gk2ijg'
                    linkText = 'Book now' />
            </Informative>
        </Section>     
    </React.Fragment>
);

export default services;
