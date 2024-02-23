import React from 'react';

const Seo = ({ title, children }) => (
	<>
		<title>{title ? `${title} | Ashk Aesthetics` : 'Ashk Aesthetics'}</title>

		{children}
	</>
);

export default Seo;
