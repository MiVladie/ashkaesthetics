import React from 'react';

const Seo = ({ title, children }) => (
	<>
		<html lang='en' />

		<title>{title ? `${title} | Ashk Aesthetics` : 'Ashk Aesthetics'}</title>

		{children}
	</>
);

export default Seo;
