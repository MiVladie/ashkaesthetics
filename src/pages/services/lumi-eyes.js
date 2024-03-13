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

const LumiEyes = () => {
	const { lumiEyesImage, lumiEyesImage02, lumiEyesImage03 } = useStaticQuery(graphql`
		query {
			lumiEyesImage: file(relativePath: { eq: "assets/images/promotional/lumi eyes.jpeg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			lumiEyesImage02: file(relativePath: { eq: "assets/images/promotional/lumi eyes02.jpeg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			lumiEyesImage03: file(relativePath: { eq: "assets/images/promotional/lumi eyes03.jpeg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`);

	return (
		<Layout>
			<Preface image={lumiEyesImage} main='Lumi Eyes' />

			<Section>
				<Introduction
					main='What is Lumi eyes?'
					description={[
						'Lumi Eyes is a type of tissue stimulator that is specifically designed for use in needle Mesotherapy treatments around the eyes and tear valley area. Unlike other treatments, Lumi Eyes does not cause side effects minimal invasive treatment with fast and anti-agin results and visible changes with in  just one session.',
						'This high-quality product contains polynucleotides that have a strong tissue-regenerating effect, helping to repair damage to the dermis. The Lumi Eyes Treatment effectively hydrates and rejuvenates the skin tissue while reducing symptoms of fatigue and skin discoloration.'
					]}
				/>
			</Section>

			<Section background='#F8F8F8'>
				<Introduction
					main='Benefits of Lumi eyes'
					description={[
						'Repairs reconstructs, and illuminates the skin around the eyes.',
						'Revitalize the tear ducks.',
						'Strength and tightens the skin.',
						'Skin whitening and rejuvenation.',
						'Reduces pigmentation.',
						'Stimulates the collagen and elastin synthesis.',
						'Significantly rashes facial wrinkles.',
						'Intensively hydrates.',
						'Impress to skin elasticity.',
						'Tightens flabby and sagging skin.'
					]}
				/>
			</Section>

			<Section>
				<Informative image={lumiEyesImage02} main='Lumi Eyes'>
					<Descriptive
						data={[
							{
								name: 'What are side effects of Lumi eyes?',
								description:
									'Mild swelling in the area; Slight redness, and small injection marks; Mild bruising due to skin pricking; Erythema, itching, irritation.'
							},
							{
								name: 'How many treatments do I need?',
								description:
									'For best results, it is recommended to perform a series of 3 treatments with an interval of 4 weeks and repeat the treatment twice a year. The skin will gain energy and freshness, while reducing bruising and fatigue.'
							}
						]}
					/>
				</Informative>
			</Section>

			<Section background='#F8F8F8'>
				<Introduction
					main='What is aftercare of Lumi eyes?'
					description={[
						'Avoid swimming for 48 hours',
						'Avoid sunbathing, sun exposure and exercise after the treatment',
						'Avoid Makeup for 24 hours',
						'Use a good SP of 30 or higher every day. ',
						'Facials, dermaplaning, laser treatments, and other facial treatments for minimum of two weeks.'
					]}
				/>
			</Section>

			<Section>
				<Introduction main='Price list' />

				<Informative image={lumiEyesImage03} main='Lumi Eyes' reversed>
					<Catalog
						data={[
							{ name: 'Lumi Eyes [1 session]', price: 140 },
							{ name: 'Lumi Eyes [2 sessions]', price: 260 },
							{ name: 'Lumi Eyes [3 sessions]', price: 365 }
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

export default LumiEyes;

export const Head = () => <Seo title='Lumi Eyes' />;
