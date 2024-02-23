import React from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

import * as classes from './Layout.module.scss';
import './reset.css';

const Layout = ({ children }) => (
	<div className={classes.Layout}>
		<Navigation />

		<main>{children}</main>

		<Footer />
	</div>
);

export default Layout;
