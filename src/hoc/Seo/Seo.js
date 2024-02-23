import React from 'react';

const Seo = ({ title, children }) => (
	<>
		<html lang='en' />

		<title>{title ? `${title} | Ashk Aesthetics` : 'Ashk Aesthetics'}</title>
		<meta
			name='description'
			content='Ashk Aesthetics offers a range of services which include bespoke Microblading, Eyelash treatments and body waxing.'
		/>

		{children}
	</>
);

export default Seo;
