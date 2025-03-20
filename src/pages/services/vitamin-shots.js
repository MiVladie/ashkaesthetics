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

const VitaminShots = () => {
	const { vitaminShotsImage1, vitaminShotsImage2, vitaminShotsImage3 } = useStaticQuery(graphql`
		query {
			vitaminShotsImage1: file(relativePath: { eq: "assets/images/promotional/vitamin shot 1.jpg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			vitaminShotsImage2: file(relativePath: { eq: "assets/images/promotional/vitamin shot 2.jpg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			vitaminShotsImage3: file(relativePath: { eq: "assets/images/promotional/vitamin shot 3.jpg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`);

	return (
		<Layout>
			<Preface image={vitaminShotsImage1} main='Vitamin Shots' />

			<Section>
				<Introduction
					main='What Are Vitamin Shots?'
					description={[
						'Vitamin shots deliver essential nutrients directly into the bloodstream via intramuscular injection, typically in the arm.',
						'This method ensures fast absorption and bypasses the digestive system, making it more effective than oral supplements for individuals with nutrient deficiencies or absorption issues.'
					]}
				/>
			</Section>

			<Section background='#F8F8F8'>
				<Informative image={vitaminShotsImage2} main='Vitamin Shots'>
					<Descriptive
						data={[
							{
								name: 'Vitamin C Shot',
								description:
									'A powerful antioxidant, Vitamin C shots help boost the immune system, promote collagen production for healthier skin, and enhance overall skin radiance. They can also help reduce the signs of aging and improve skin tone.'
							},
							{
								name: 'Vitamin D Shot',
								description:
									'Essential for bone health, Vitamin D supports the immune system, improves mood, and helps regulate calcium levels in the body. A Vitamin D shot can be particularly beneficial for individuals with limited sun exposure or those with a deficiency.'
							},
							{
								name: 'Vitamin B12 Shot',
								description:
									'Known for boosting energy, Vitamin B12 shots help with fatigue, support the nervous system, and improve mental clarity. They are commonly used to combat vitamin B12 deficiencies, which can lead to tiredness and weakness.'
							},
							{
								name: 'Biotin Shot',
								description:
									'Often called the "beauty vitamin," Biotin shots support healthy hair, skin, and nails by promoting growth and improving overall appearance. They are commonly used to address thinning hair, brittle nails, and skin conditions like acne.'
							}
						]}
					/>
				</Informative>
			</Section>

			<Section>
				<Introduction main='Price list' />

				<Informative image={vitaminShotsImage3} main='Vitamin Shots'>
					<Catalog
						data={[
							{
								name: 'Vitamin C Shot',
								price: 35
							},
							{
								name: 'Vitamin D Shot',
								price: 35
							},
							{
								name: 'Vitamin B12 Shot',
								price: 35
							},
							{
								name: 'Biotin Shot',
								price: 35
							}
						]}
						maxVisible={6}
						linkTo={BOOKING_URL}
						linkText='Book now'
					/>
				</Informative>
			</Section>
		</Layout>
	);
};

export default VitaminShots;

export const Head = () => <Seo title='Platelet-Rich Plasma' />;
