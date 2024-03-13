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

const LemonBottle = () => {
	const { lemonBottleImage, lemonBottleTreatmentAreas } = useStaticQuery(graphql`
		query {
			lemonBottleImage: file(relativePath: { eq: "assets/images/promotional/lemon bottle.png" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			lemonBottleTreatmentAreas: file(
				relativePath: { eq: "assets/images/promotional/lemon bottle treatment areas.png" }
			) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`);

	return (
		<Layout>
			<Preface image={lemonBottleImage} main='Lemon Bottle' />

			<Section>
				<Introduction
					main='Fat Dissolving Lemon Bottle'
					description={[
						'Lemon bottle is a combination of vitamins and enzymes that break down the subcutaneous layer of the fat cell. There is a high concentration of Vitamin B2 also known as Riboflavin and bromelain, this increases and speeds up the process of breaking down the fat cell and allowing your metabolism get rid of it naturally.',
						'These injections are becoming increasingly popular as an alternative to surgical procedures such as liposuction. Unlike other fat dissolvers this causes minimal swelling there’s no downtime and it contains natural ingredients.'
					]}
				/>
			</Section>

			<Section background='#F8F8F8'>
				<Informative
					image={lemonBottleTreatmentAreas}
					main='Areas that can be treated using lemon bottle'
					reversed>
					<Descriptive
						data={[
							{
								description: 'Jaw'
							},
							{
								description: 'Chin'
							},
							{
								description: 'Arms'
							},
							{
								description: 'Love handles'
							},
							{
								description: 'Abdomen'
							},
							{
								description: 'Inner thigs'
							}
						]}
					/>
				</Informative>
			</Section>

			<Section>
				<Introduction
					main='How many sessions are typically required for optimal Lemon Bottle Fat Dissolving results?'
					description={[
						'The number of sessions varies based on individual needs. However, most clients achieve their desired results after 2-4 sessions, with each session spaced several weeks apart.'
					]}
				/>
			</Section>

			<Section background='#F8F8F8'>
				<Introduction
					main='How long do the effects of Lemon Bottle Fat Dissolving treatment last?'
					description={[
						'The transformative effects of Lemon Bottle Fat Dissolving Injections can be long-lasting. To ensure the longevity of these results, it’s beneficial to adopt a balanced diet and regular exercise routine.'
					]}
				/>
			</Section>

			<Section>
				<Introduction
					main='Lemon Bottle Fat Dissolving Aftercare'
					description={[
						'Immediate Post-Treatment Care:',
						'Redness',
						'Swelling',
						'Slight bruising',
						'Please note that these symptoms are temporary and typically subside within a few days. Our team is available to address any concerns and guide you through the recovery process.'
					]}
				/>
			</Section>

			<Section background='#F8F8F8' reversed>
				<Introduction main='Price list' />

				<Informative image={lemonBottleImage} main='Face & Neck'>
					<Catalog
						data={[
							{ name: 'Small Area [1 session]', meta: 'Chin Fat, Jaw, Neck, Bra Bulge', price: 85 },
							{ name: 'Small Area [2 sessions]', meta: 'Chin Fat, Jaw, Neck, Bra Bulge', price: 160 }
						]}
						maxVisible={6}
					/>

					<Catalog
						data={[
							{ name: 'Medium Area [1 session]', meta: 'Arms, Back, Lower Stomach', price: 170 },
							{ name: 'Medium Area [2 sessions]', meta: 'Arms, Back, Lower Stomach', price: 310 },
							{ name: 'Medium Area [3 sessions]', meta: 'Arms, Back, Lower Stomach', price: 460 }
						]}
						maxVisible={6}
					/>

					<Catalog
						data={[
							{
								name: 'Large Area [1 session]',
								meta: 'Stomach, Inner Thigh, Outer Thigh, Love Handles',
								price: 340
							},
							{
								name: 'Large Area [2 sessions]',
								meta: 'Stomach, Inner Thigh, Outer Thigh, Love Handles',
								price: 630
							},
							{
								name: 'Large Area [3 sessions]',
								meta: 'Stomach, Inner Thigh, Outer Thigh, Love Handles',
								price: 900
							}
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

export default LemonBottle;

export const Head = () => <Seo title='Lemon Bottle' />;
