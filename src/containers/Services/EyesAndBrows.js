import React from 'react';

import Preface from '../../components/Preface/Preface';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Informative from '../../components/Informative/Informative';
import Catalog from '../../components/Complementary/Catalog/Catalog';

import eyesAndBrowsPrefaceImage from '../../assets/images/promotional/eyes & brows.jpg';
import eyesAndBrowsPriceListImage from '../../assets/images/promotional/eyes & brows 2.jpg';

const eyesAndBrows = () => (
    <React.Fragment>
        <Preface
            image = { eyesAndBrowsPrefaceImage }
            main = 'Eyes & Brows' />

        <Section>
            <Introduction
                main = 'Brow lamination'
                description = {['Brow Lamination is a salon treatment which involves restructuring brow hairs to keep them in their desired shape. Naturally fuller brows which can be tailored to suit any brow preference.\nBrows can be worn brushed up or down depending on your style. Brow Lamination treatments are proving extremely popular thanks to their amazing results which last up to 8 weeks.\nThis treatment takes 30- 45 minutes and will give the appearance of thicker brows that are expertly styled into your desired shape.']} />
        </Section>

        <Section background = '#F8F8F8'>
            <Introduction
                main = 'Lash lift'
                description = {['A lash lift is a bit like an eyelash perm and gives the same effect as using an eyelash curler. it lasts 8-12 week and is suitable for clients no matter what their lash length. It’s a very low maintenance lash service. It means you can also use your normal makeup, mascara and makeup remover.']} />           
        </Section>

        <Section>
            <Informative
                image = { eyesAndBrowsPriceListImage }
                main = "Eyes & Brows"
                description = ''>
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
                        { name: 'Eyebrow Wax (Strip)', time:  15, price: 8 },
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

export default eyesAndBrows;
