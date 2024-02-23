import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../hoc/Layout/Layout';
import Banner from '../components/Banner/Banner';
import Seo from '../hoc/Seo/Seo';

const NotFound = () => {
	const { bannerImage } = useStaticQuery(graphql`
		query {
			bannerImage: file(relativePath: { eq: "assets/images/promotional/page_404.jpg" }) {
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
				main='Page not found!'
				description='The page you are looking for does not exist or an other error occured! Go back, or head over to ashk-aesthetics.co.uk to choose a new direction.'
				linkLeftTo='/'
				linkLeftText='Go to home'
			/>
		</Layout>
	);
};

export default NotFound;

export const Head = () => <Seo title='404' />;
