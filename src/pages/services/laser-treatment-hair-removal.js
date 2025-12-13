import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { BOOKING_URL } from '../../config/constants';

import Layout from '../../hoc/Layout/Layout';
import Preface from '../../components/Preface/Preface';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Informative from '../../components/Informative/Informative';
import Catalog from '../../components/Complementary/Catalog/Catalog';
import Seo from '../../hoc/Seo/Seo';

const LaserHairRemoval = () => {
	const { laserTreatmentImage, laserHairRemovalImage } = useStaticQuery(graphql`
		query {
			laserTreatmentImage: file(relativePath: { eq: "assets/images/promotional/laser treatment.jpg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			laserHairRemovalImage: file(relativePath: { eq: "assets/images/promotional/laser hair removal.jpg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`);

	return (
		<Layout>
			<Preface image={laserHairRemovalImage} main='Laser Treatment & Hair Removal' />

			<Section>
				<Introduction
					main='Laser Treatment'
					description={[
						'The Pulsar system can improve the appearance of many skin conditions, creating smoother and rejuvenated looking skin. The energy from the light source is taken up by the pigments (melanin and haemoglobin) in the skin, hairs and blood vessels.',
						'Selective filtration makes the energy uptake specific for melanin or haemoglobin; thus the system can be used for hair removal, vascular lesions and pigmented lesions.',
						'The technology is extremely effective for the treatment of the following skin condition: Acne, Rosacea, Collagen stimulation, Thread veins, Age pigmentation spots, Sun damage, Hair Removal'
					]}
				/>
			</Section>

			<Section background='#F8F8F8'>
				<Introduction
					main='Hair Removal'
					description={[
						'The number of treatments needed will depend on the skin condition that needs to be treated and the severity of each condition. More than 1 session for any area is usually needed to achieve a good result. For example, a series of to six to ten treatment sessions with a two to three month interval is normally sufficient to remove virtually all body hair.',
						'Hair laser removal can be dependent on hair colour. Dark hairs are most easily treated due to the large concentration of dark melanin in these, which gives maximum absorption and conversion of light energy to heat. Very fair hair has less melanin and consequently less heat is produced making it slightly less certain of permanent destruction of the hair follicles. Grey (white) hair has almost no melanin and cannot be efficiently treated. '
					]}
				/>
			</Section>

			<Section>
				<Introduction
					main='Price list'
					description={[
						<>
							In partnership with{' '}
							<a href='https://www.silkysmoothbeauty.com/' target='_blank' rel='noopener noreferrer'>
								Silky Smooth
							</a>
						</>
					]}
				/>

				<Informative image={laserHairRemovalImage} main='Laser Treatments' description=''>
					<Catalog
						data={[
							{ name: 'Half Legs', price: 140 },
							{ name: 'Legs', price: 215 },
							{ name: 'Toes / Fingers ', price: 40 }
						]}
						maxVisible={6}
					/>

					<Catalog
						data={[
							{ name: 'Arms', price: 150 },
							{ name: 'Fingers / Hands', price: 40 },
							{ name: 'Underarm ', price: 66 }
						]}
						maxVisible={6}
					/>

					<Catalog
						data={[
							{ name: 'Hollywood / Brazilian', price: 108 },
							{ name: 'Extended Bikini', price: 90 },
							{ name: 'Bikini Line', price: 66 },
							{ name: 'Buttocks', price: 85 }
						]}
						maxVisible={6}
						linkTo={BOOKING_URL}
						linkText='Book now'
					/>
				</Informative>

				<Informative image={laserTreatmentImage} main='Laser Treatments' description='' reversed>
					<Catalog
						data={[
							{ name: 'Full Face', price: 100 },
							{ name: 'Chin & Upper Lip ', price: 65 },
							{ name: 'Chin ', price: 40 },
							{ name: 'Lip', price: 35 },
							{ name: 'Sideburns', price: 40 },
							{ name: 'Ears ', price: 40 }
						]}
						maxVisible={6}
					/>

					<Catalog
						data={[
							{ name: 'Abdomen & Chest', price: 150 },
							{ name: 'Breasts / Chest', price: 125 },
							{ name: 'Back & Shoulders', price: 200 },
							{ name: 'Nipples', price: 40 },
							{ name: 'Navel Line', price: 40 }
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

export default LaserHairRemoval;

export const Head = () => <Seo title='Laser Hair Removal' />;
