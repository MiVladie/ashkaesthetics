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

const PlateletRichPlasma = () => {
	const { plateletRichPlasmaImage1, plateletRichPlasmaImage2, plateletRichPlasmaImage3 } = useStaticQuery(graphql`
		query {
			plateletRichPlasmaImage1: file(relativePath: { eq: "assets/images/promotional/prp 1.jpeg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			plateletRichPlasmaImage2: file(relativePath: { eq: "assets/images/promotional/prp 2.jpeg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
			plateletRichPlasmaImage3: file(relativePath: { eq: "assets/images/promotional/prp 3.jpeg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`);

	return (
		<Layout>
			<Preface image={plateletRichPlasmaImage1} main='Platelet-Rich Plasma' />

			<Section>
				<Introduction
					main='Platelet-Rich Plasma'
					description={[
						'Nucleofill Skin Booster is a cutting-edge injectable treatment designed to rejuvenate and hydrate the skin using a powerful combination of hyaluronic acid, polynucleotides, and salmon DNA.',
						"The salmon DNA (also known as DNA fragments) and polynucleotides play a crucial role in stimulating the skin's natural healing and regeneration processes. This treatment is ideal for improving skin quality on the face, neck, and décolletage."
					]}
				/>
			</Section>

			<Section background='#F8F8F8'>
				<Informative image={plateletRichPlasmaImage1} main='Where Can PRP Be Used?' reversed>
					<Descriptive
						data={[
							{
								name: 'Facial Rejuvenation ("Vampire Facial")',
								description:
									'Enhances skin texture, reduces fine lines, and improves elasticity for a youthful glow.'
							},
							{
								name: 'Hair Restoration',
								description:
									'Stimulates hair follicles to encourage natural hair growth, commonly used in areas with thinning or receding hair.'
							},
							{
								name: 'Acne Scarring and Scar Reduction',
								description: 'Helps reduce the appearance of scars and promotes smoother skin texture.'
							},
							{
								name: 'Under-Eye Area',
								description:
									'Improves dark circles, puffiness, and fine lines, giving a more refreshed and youthful look.'
							}
						]}
					/>
				</Informative>
			</Section>

			<Section>
				<Informative image={plateletRichPlasmaImage2} main='How is the Treatment Carried Out?'>
					<Descriptive
						data={[
							{
								name: 'Consultation',
								description:
									'A trained professional will assess your suitability for PRP and discuss your goals and expectations.'
							},
							{
								name: 'Blood Collection',
								description:
									'A small amount of blood from the arm is drawn, similar to a routine blood test'
							},
							{
								name: 'Centrifugation',
								description:
									'The collected blood is placed in a centrifuge machine, which spins it at high speed to separate the platelets from other blood components. This process creates a concentrated, platelet-rich plasma.'
							},
							{
								name: 'Injection/Topical Application',
								description:
									'The PRP is then injected into the targeted area using fine needles or applied topically if combined with microneedling. The platelets release growth factors that stimulate the healing and regenerative process.'
							},
							{
								name: 'Completion',
								description:
									'The entire procedure typically takes about 30–60 minutes, depending on the area being treated. Most patients experience little to no downtime.'
							}
						]}
					/>
				</Informative>
			</Section>

			<Section background='#F8F8F8'>
				<Introduction
					main='What to Do Before the Treatment?'
					description={[
						'Preparing for PRP treatment can help ensure the best results:',
						'Avoid Blood-Thinning Medications aspirin, ibuprofen for at least a week before treatment, as these can affect platelet function.',
						'Limit Alcohol and Smoking as both can impair the healing process.',
						'Stay Hydrated good hydration improves blood quality and makes the blood draw process easier.',
						'Eat a Healthy Diet: eating nutritious foods rich in vitamins and minerals can help support the quality of your platelets and improve overall results.'
					]}
				/>
			</Section>

			<Section>
				<Introduction
					main='Side Effects of PRP Treatment'
					description={[
						'PRP is generally safe as it uses your own blood, but there can be mild side effects, including:',
						'Mild Pain or Discomfort discomfort may occur at the injection site, but it typically subsides quickly.',
						'Redness and Swelling or bruising is common at the injection site and usually resolves within a few days.',
						'Minor Bruising at the injection area, which should fade within a week.'
					]}
				/>
			</Section>

			<Section background='#F8F8F8'>
				<Introduction
					main='Aftercare for PRP Treatment'
					description={[
						'To maximize results and minimize any discomfort, follow these aftercare guidelines:',
						'Avoid Touching or Washing the Treated area for at least 6 hours post-treatment to allow the PRP to be fully absorbed.',
						'Avoid applying makeup, creams, or any products to the treated area for at least 24 hours to prevent irritation or infection.',
						'Drink plenty of water to aid in the healing process and support the treatment effects.',
						'Limit Sun Exposure use SPF 30+',
						'Avoid Vigorous Exercise for 24–48 Hours to reduce the risk of swelling or bruising.',
						'Avoid Alcohol and Anti-Inflammatory Medications at least 24 hour post-treatment.',
						'Be Patient, PRP works gradually, with results typically visible within a few weeks to a few months as the body’s natural healing process takes place.'
					]}
				/>
			</Section>

			<Section>
				<Introduction
					main='Conclusion'
					description={[
						"PRP is a natural, safe, and effective treatment option for various aesthetic and therapeutic purposes. Whether you're looking to rejuvenate your skin, restore hair, or treat scars, PRP offers a non-surgical approach that harnesses your body's own healing powers. Always consult with a certified provider to ensure the treatment is suitable for you and to achieve the best results."
					]}
				/>
			</Section>

			<Section background='#F8F8F8'>
				<Introduction main='Price list' />

				<Informative image={plateletRichPlasmaImage3} main='PRP Treatments'>
					<Catalog
						data={[
							{ name: 'Hair Loss [1 session]', price: 170 },
							{ name: 'Hair Loss [2 sessions]', price: 450 },
							{ name: 'Hair Loss [3 sessions]', price: 899 }
						]}
						maxVisible={6}
					/>

					<Catalog
						data={[
							{
								name: 'Face [1 session]',
								price: 170
							},
							{
								name: 'Face [2 sessions]',
								price: 299
							},
							{
								name: 'Face [3 sessions]',
								price: 450
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

export default PlateletRichPlasma;

export const Head = () => <Seo title='Platelet-Rich Plasma' />;
