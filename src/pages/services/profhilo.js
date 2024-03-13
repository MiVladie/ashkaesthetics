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

const Profhilo = () => {
	const { profhiloImage, profhiloImage02, profhiloImage03 } = useStaticQuery(graphql`
		query {
			profhiloImage: file(relativePath: { eq: "assets/images/promotional/profhilo.jpeg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			profhiloImage02: file(relativePath: { eq: "assets/images/promotional/profhilo02.jpeg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			profhiloImage03: file(relativePath: { eq: "assets/images/promotional/profhilo03.jpeg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`);

	return (
		<Layout>
			<Preface image={profhiloImage} main='Profhilo' />

			<Section>
				<Introduction
					main='What is Skin Booster Profhilo?'
					description={[
						'Profilo is a type skin booster injectable treat treatment.',
						'It is designed to stimulate natural production of collagen and elastin, essential proteins that contribute to skin elasticity and firmness. Additionally, Profilo has the unique property of attracting water to the treated areas, enhancing skin hydration.'
					]}
				/>
			</Section>

			<Section background='#F8F8F8'>
				<Introduction
					main='Benefits of Profilo'
					description={[
						'Stimulates Collagen and Elastin.',
						'improves Skin hydration.',
						'Rejuvenates Skin reduces fine lines and wrinkles.',
						'Tightens the skin ',
						'Contributes to overall skin tightness, leading to a more youthful and refreshed complexion.',
						'One of the an amazing treatment for neck crepey neck.'
					]}
				/>
			</Section>

			<Section>
				<Informative image={profhiloImage02} main='Skin Booster Profhilo'>
					<Descriptive
						data={[
							{
								name: 'The areas we can treat',
								description: 'Face; Neck'
							},
							{
								name: 'How quickly does Profhilo work?',
								description:
									'You will see the results in 4-6 weeks. To maintain the results you will need one session every six months.'
							},
							{
								name: 'How many treatments will I need?',
								description:
									'To achieve the result, you will need two-three profhilo treatments four weeks apart, and then top up at six months to maintain the effects.'
							},
							{
								name: 'What are the side effects?',
								description: 'Redness; Mild swelling'
							}
						]}
					/>
				</Informative>
			</Section>

			<Section background='#F8F8F8'>
				<Introduction
					main='What is the aftercare of Profhilo treatments?'
					description={[
						'Do not apply make up or spray tan at least for 24 hours. ',
						'Avoid heavy exercise, steam or swimming pool for 48 hours after treatment. ',
						'Avoid touching the area.',
						'Avoid high perfume products.'
					]}
				/>
			</Section>

			<Section>
				<Introduction
					main='What are the difference between Profhilo and Dermal Fillers?'
					description='Whilst traditional dermal fillers also contain hyaluronic acid, the key difference between the two treatments is that Profhilo doesn’t add volume or change the structure of the face. Dermal fillers are used to augment a specific area via a lifting and volumising effect. They do give the skin greater luminosity, but Profhilo takes a more holistic approach for widespread improvement'
				/>
			</Section>

			<Section background='#F8F8F8'>
				<Introduction main='Price list' />

				<Informative image={profhiloImage03} main='Face & Neck' reversed>
					<Catalog
						data={[
							{ name: 'Face [1 session]', price: 180 },
							{ name: 'Face [2 sessions]', price: 350 },
							{ name: 'Face [3 sessions]', price: 510 }
						]}
						maxVisible={6}
						expandText='View more'
						collapseText='View less'
					/>

					<Catalog
						data={[
							{ name: 'Neck [1 session]', price: 180 },
							{ name: 'Neck [2 sessions]', price: 350 },
							{ name: 'Neck [3 sessions]', price: 510 }
						]}
						maxVisible={6}
						expandText='View more'
						collapseText='View less'
						linkTo={BOOKING_URL}
						linkText='Book now'
					/>
				</Informative>
			</Section>
		</Layout>
	);
};

export default Profhilo;

export const Head = () => <Seo title='Profhilo' />;
