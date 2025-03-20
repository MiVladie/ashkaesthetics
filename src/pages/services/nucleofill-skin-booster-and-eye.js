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

const NecleofillSkinBoosterAndEye = () => {
	const {
		nucleofillSkinBoosterImage1,
		nucleofillSkinBoosterImage2,
		nucleofillSkinBoosterImage3,
		nucleofillSkinBoosterImage4
	} = useStaticQuery(graphql`
		query {
			nucleofillSkinBoosterImage1: file(
				relativePath: { eq: "assets/images/promotional/nucleofill skin booster 1.jpg" }
			) {
				childImageSharp {
					gatsbyImageData
				}
			}
			nucleofillSkinBoosterImage2: file(
				relativePath: { eq: "assets/images/promotional/nucleofill skin booster 2.jpg" }
			) {
				childImageSharp {
					gatsbyImageData
				}
			}
			nucleofillSkinBoosterImage3: file(
				relativePath: { eq: "assets/images/promotional/nucleofill skin booster 3.jpg" }
			) {
				childImageSharp {
					gatsbyImageData
				}
			}
			nucleofillSkinBoosterImage4: file(
				relativePath: { eq: "assets/images/promotional/nucleofill skin booster 4.jpg" }
			) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`);

	return (
		<Layout>
			<Preface image={nucleofillSkinBoosterImage1} main='Nucleofill Skin Booster' />

			<Section>
				<Introduction
					main='Nucleofill Skin Booster'
					description={[
						'Nucleofill Skin Booster is a cutting-edge injectable treatment designed to rejuvenate and hydrate the skin using a powerful combination of hyaluronic acid, polynucleotides, and salmon DNA.',
						"The salmon DNA (also known as DNA fragments) and polynucleotides play a crucial role in stimulating the skin's natural healing and regeneration processes. This treatment is ideal for improving skin quality on the face, neck, and décolletage."
					]}
				/>
			</Section>

			<Section background='#F8F8F8'>
				<Informative image={nucleofillSkinBoosterImage1} main='Benefits'>
					<Descriptive
						data={[
							{
								name: 'Deep Hydration',
								description:
									'The hyaluronic acid in Nucleofill deeply hydrates the skin, leaving it plump and smooth.'
							},
							{
								name: 'Skin Regeneration',
								description:
									'The polynucleotides and salmon DNA fragments enhance cellular repair and regeneration, promoting healthier, more youthful skin.'
							},
							{
								name: 'Improved Skin Quality',
								description:
									'The treatment stimulates collagen and elastin production, improving skin firmness, elasticity, and texture.'
							},
							{
								name: 'Reduces Fine Lines and Wrinkles',
								description:
									'By promoting collagen regeneration, Nucleofill helps reduce the appearance of fine lines and wrinkles.'
							},
							{
								name: 'Safe and Non-Invasive',
								description:
									'Nucleofill is a minimally invasive option, requiring no surgery and with little to no downtime.'
							}
						]}
					/>
				</Informative>
			</Section>

			<Section>
				<Introduction
					main='Side Effects'
					description={[
						'Swelling, Redness or Bruising: Mild redness and swelling at the injection site are common but usually resolve within a few hours bruising generally fades within a few days.',
						'Soreness or Tenderness: Some light discomfort or tenderness in the treated areas may occur but usually fades quickly.'
					]}
				/>
			</Section>

			<Preface image={nucleofillSkinBoosterImage2} main='Nucleofill Eye' />

			<Section>
				<Introduction
					main='Nucleofill Eye'
					description={[
						'Nucleofill Eye is a specialized version of the Nucleofill treatment, specifically designed for the delicate skin around the eyes',
						'It contains a unique formulation of hyaluronic acid, polynucleotides, and salmon DNA, aimed at rejuvenating the eye area by reducing puffiness, dark circles, and fine lines. The combination of these ingredients helps to regenerate the skin, enhance hydration, and restore a youthful, refreshed look.'
					]}
				/>
			</Section>

			<Section background='#F8F8F8'>
				<Informative image={nucleofillSkinBoosterImage3} main='Benefits' reversed>
					<Descriptive
						data={[
							{
								name: 'Reduces Dark Circles',
								description:
									'Nucleofill Eye helps brighten the under-eye area by improving circulation and reducing pigmentation, effectively diminishing dark circles.'
							},
							{
								name: 'Decreases Puffiness',
								description:
									'The treatment targets fluid retention and stimulates the regeneration of the skin, reducing puffiness and under-eye bags.'
							},
							{
								name: 'Smooths Fine Lines',
								description:
									'By promoting collagen production, it smooths out fine lines, including crow’s feet, around the eyes.'
							},
							{
								name: 'Brightens and Rejuvenates',
								description:
									'The DNA and polynucleotides in Nucleofill Eye help revitalize the sensitive skin around the eyes, making it appear brighter and more youthful.'
							},
							{
								name: 'Non-Surgical Alternative',
								description:
									'Nucleofill Eye offers a non-invasive solution to under-eye concerns without the need for surgery or lengthy recovery time.'
							}
						]}
					/>
				</Informative>
			</Section>

			<Section>
				<Introduction
					main='Conclusion'
					description={[
						'Both Nucleofill Skin Booster and Nucleofill Eye are advanced treatments that use a combination of salmon DNA and polynucleotides to stimulate skin regeneration and provide deep hydration, making them ideal for those looking to restore a youthful glow and improve the quality of their skin. These treatments are minimally invasive, safe, and effective with minimal downtime.'
					]}
				/>
			</Section>

			<Section background='#F8F8F8'>
				<Introduction main='Price list' />

				<Informative image={nucleofillSkinBoosterImage4} main='Nucleofill'>
					<Catalog
						data={[
							{ name: 'Under Eye Skin Booster [1 session]', price: 150 },
							{ name: 'Under Eye Skin Booster [2 sessions]', price: 280 },
							{ name: 'Under Eye Skin Booster [3 sessions]', price: 399 }
						]}
						maxVisible={6}
					/>

					<Catalog
						data={[
							{
								name: 'Polynucleotide (Salmon DNA) [1 session]',
								price: 180
							},
							{
								name: 'Polynucleotide (Salmon DNA) [2 sessions]',
								price: 350
							},
							{
								name: 'Polynucleotide (Salmon DNA) [3 sessions]',
								price: 510
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

export default NecleofillSkinBoosterAndEye;

export const Head = () => <Seo title='Platelet-Rich Plasma' />;
