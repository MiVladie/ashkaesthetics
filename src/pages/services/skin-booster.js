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

const SkinBooster = () => {
	const {
		profhiloImage,
		profhiloImage02,
		profhiloImage03,
		nucleofillSkinBoosterImage1,
		nucleofillSkinBoosterImage2,
		nucleofillSkinBoosterImage3,
		nucleofillSkinBoosterImage4
	} = useStaticQuery(graphql`
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
								name: 'Full Face',
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

export default SkinBooster;

export const Head = () => <Seo title='Profhilo' />;
