import React from 'react';

import Preface from '../../components/Preface/Preface';
import Section from '../../components/Section/Section';
import Introduction from '../../components/Introduction/Introduction';
import Informative from '../../components/Informative/Informative';
import Descriptive from '../../components/Complementary/Descriptive/Descriptive';

import lumiEyesImage from '../../assets/images/promotional/lumi eyes.png';

const lumiEyes = () => (
	<React.Fragment>
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
			<Informative image={lumiEyesImage} main='Lumi Eyes'>
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
	</React.Fragment>
);

export default lumiEyes;
