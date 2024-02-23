import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../hoc/Layout/Layout';
import Preface from '../../components/Preface/Preface';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Informative from '../../components/Informative/Informative';
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
					main='When can you see result?'
					description={[
						'When the solution is injected in to the fat cell, the fat cells start to break down immediately, you will notice the weight loss via inches. It is recommended to drink 2 litres of water to transport the fat cells out of the body. It can take up to 3-12 weeks for optimal results.'
					]}
				/>
			</Section>
		</Layout>
	);
};

export default LemonBottle;

export const Head = () => <Seo title='Lemon Bottle' />;
