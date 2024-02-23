import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import * as classes from './Footer.module.scss';

const Footer = () => (
	<footer className={classes.Footer}>
		<div className={classes.Line} />

		<div className={classes.Links}>
			<a className={classes.Link} href='https://instagram.com/ashk_aesthetics/' target='__blank'>
				<StaticImage className={classes.Icon} src='../../assets/icons/instagram.png' alt='instagram' />
			</a>

			<a className={classes.Link} href='https://facebook.com/ashkaesthetics/' target='__blank'>
				<StaticImage className={classes.Icon} src='../../assets/icons/facebook.png' alt='facebook' />
			</a>

			<a className={classes.Link} href='tel:07768 105 096'>
				<StaticImage className={classes.Icon} src='../../assets/icons/phone.png' alt='phone' />
			</a>

			<a className={classes.Link} href='mailto:ask@ashk-aesthetics.co.uk'>
				<StaticImage className={classes.Icon} src='../../assets/icons/email.png' alt='email' />
			</a>
		</div>

		<p className={classes.Content}>
			Copyright Ashk Aesthetics &copy; {new Date().getFullYear()} <br className={classes.Break} /> All Rights
			Reserved
			<br />
			Website created by{' '}
			<a href='https://mivladie.github.io/letscomit/' target='__blank'>
				letscomit
			</a>
		</p>
	</footer>
);

export default Footer;
