import React from 'react';

import { Link } from 'gatsby';

import * as classes from './Button.module.scss';

const Button = ({ children, linkTo, centered }) => (
	<Link className={classes.Button} to={linkTo} style={{ margin: centered ? '0 auto' : '0' }}>
		{children}
	</Link>
);

export default Button;
