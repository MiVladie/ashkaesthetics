import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../hoc/Layout/Layout';
import Banner from '../../components/Banner/Banner';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Contact from '../../components/Contact/Contact';
import Seo from '../../hoc/Seo/Seo';

const Find = () => {
	const { bannerImage } = useStaticQuery(graphql`
		query {
			bannerImage: file(relativePath: { eq: "assets/images/promotional/page_contact.jpg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`);

	return (
		<Layout>
			<Banner
				image={bannerImage}
				imageAlt='Beauty Salon Background'
				main='Get In Touch'
				description='Want to get in touch with us? We would love to hear from you. Here is how you can reach us..'
				linkLeftTo='/services'
				linkLeftText='View services'
				linkRightTo='https://fresha.com/ashk-aesthetics-r6gk2ijg'
				linkRightText='Book now'
				scrollTo='intro'
			/>

			<Section id='intro'>
				<Introduction main='Find us' />
				<Contact
					formDescription='For all inquiries please get in touch with us.'
					contactDescription=''
					phone='07768 105 096'
					email='ask@ashk-aesthetics.co.uk'
					address='10 Bond Street, Ealing, London W5 5AA'
					time='Wed-Sat: 9:30 AM - 6:00 PM'
					coordinates={{ lat: 51.512333, lng: -0.30616 }}
				/>
			</Section>
		</Layout>
	);
};

export default Find;

export const Head = () => <Seo title='Find Us' />;
