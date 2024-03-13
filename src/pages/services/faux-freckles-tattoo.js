import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { BOOKING_URL } from '../../config/constants';

import Layout from '../../hoc/Layout/Layout';
import Preface from '../../components/Preface/Preface';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Informative from '../../components/Informative/Informative';
import Catalog from '../../components/Complementary/Catalog/Catalog';
import Descriptive from '../../components/Complementary/Descriptive/Descriptive';
import Seo from '../../hoc/Seo/Seo';

const Freckles = () => {
	const { frecklesTatoo } = useStaticQuery(graphql`
		query {
			frecklesTatoo: file(relativePath: { eq: "assets/images/promotional/freckles tattoo.jpeg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`);

	return (
		<Layout>
			<Preface image={frecklesTatoo} main='Faux Freckles Tattoo' />

			<Section>
				<Introduction
					main='Faux Freckles Tattoo'
					description={[
						"Faux freckle tattooing is a cosmetic procedure where semi-permanent freckles are tattooed onto the skin to create a natural freckled appearance. It's popular among individuals who desire a sun-kissed, youthful look or want to enhance their natural freckles.",
						'Faux freckle treatments can be tailored to a wide range of customized colors and can be layered to achieve a natural appearance. The duration of the treatment varies, typically lasting between 1.5 to over 2 years, contingent upon factors such as immediate and long-term aftercare, skin type, lifestyle, and more. As time progresses, the pigment naturally breaks down in the skin, resulting in gradual fading of the freckles.',
						"Aftercare typically involves keeping the tattooed area clean and moisturized, avoiding sun exposure, and following any specific instructions provided by the tattoo artist. It's important to avoid picking or scratching the area to allow for proper healing and longevity of the tattoo."
					]}
				/>
			</Section>

			<Section background='#F8F8F8' reversed>
				<Introduction main='Price list' />

				<Informative image={frecklesTatoo} main='Faux Freckles Tattoo'>
					<Catalog
						data={[
							{ name: 'Light Coverage', meta: '', price: 80 },
							{ name: 'Medium Coverage', meta: '', price: 100 },
							{ name: 'Heavy Coverage', meta: '', price: 120 }
						]}
						maxVisible={6}
					/>
				</Informative>
			</Section>
		</Layout>
	);
};

export default Freckles;

export const Head = () => <Seo title='Faux Freckles Tattoo' />;
