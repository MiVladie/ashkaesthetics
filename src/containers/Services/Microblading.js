import React from 'react';

import Preface from '../../components/Preface/Preface';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Informative from '../../components/Informative/Informative';
import Catalog from '../../components/Complementary/Catalog/Catalog';

import microbladingImage from '../../assets/images/promotional/microblading.jpg';
import microbladingImage02 from '../../assets/images/promotional/microblading02.jpg';

const services = () => (
    <React.Fragment>
        <Preface
            image = { microbladingImage }
            main = 'Microblading' />

        <Section>
            <Introduction
                main = 'What is Microblading?'
                description = {['Microblading is a semi-permanent makeup procedure that dramatically corrects or fully construct/reconstruct lost eyebrow hairs. It looks so real, it is often referred to as 3D or hairstroke tattoo. It can help define, shape, and create fullness in the eyebrow area.\nMicroblading is performed by manually depositing pigment under the top layer of the skin by a special pen. Microblading technique involves drawing individual, crisp hair strokes that are more natural looking.\nResults can stay up to 2 years, but can vary depending on skin type (melanin), age, sun exposure, and products used on your face.']} />
        </Section>

        <Section background = '#F8F8F8'>
            <Introduction
                main = 'Preparation for the procedure'
                description = {['Avoid alcohol, caffeine, ibuprofen, aspirin and fish oil supplements for at least 24 hours prior to your appointment.\nAvoid waxing, threading or tweezing your eyebrows 5 days prior to procedure.\nDo not have any facial peels, dermabrasion or laser treatments in the 2 weeks before your appointment;\nIf you like to get Botox or fillers make sure you have it done at least 2 weeks before microblading;\nStop using creams/serums with Retinol or Vitamin A around your brow area at least 1 month before;\nStop taking vitamin A supplements 1 month before;\nStop using brow growth serums 2 weeks before;']} />            
        </Section>

        <Section>
            <Introduction
                main = 'Benefits Of Eyebrow Microblading'
                description = {['It gives you long-lasting results. Think of it like a tattoo that gives you the brows of your dreams. You will only need to get your brows microbladed once every one and a half to two years.\nIt is an easy solution for people who have lost their brows due to over plucking, an illness, or chemotherapy.\nIt is a quick procedure that gives you immediate results. It does not really require any time for recovery. So, you can go about your business right after it gets over.\nYou won’t have to waste time in the morning hassling over filling in your brows. Your microbladed brows are also waterproof!\nIt does not hurt too much and is completely safe. There are no undesirable side effects of this treatment.']} />
        </Section>  

        <Section background = '#F8F8F8'>
            <Informative
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
        </Section>    
    </React.Fragment>
);

export default services;
