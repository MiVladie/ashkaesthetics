import React, { useState, useEffect } from 'react';

import Layout from '../../hoc/Layout/Layout';
import Section from '../../components/Section/Section';
import Auth from '../../components/Admin/Auth/Auth';
import Inbox from '../../components/Admin/Inbox/Inbox';
import Seo from '../../hoc/Seo/Seo';

const Admin = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		checkingLogin();
	});

	function checkingLogin() {
		let token = localStorage.getItem('token');
		let expirationDate = localStorage.getItem('expirationDate');

		if (!token || !expirationDate) {
			return setLoggedIn(false);
		}

		if (expirationDate < new Date()) {
			return setLoggedIn(false);
		}

		if (!loggedIn) {
			return setLoggedIn(true);
		}
	}

	return (
		<Layout>
			<Section>
				<div style={{ minHeight: '70vh' }}>{loggedIn ? <Inbox /> : <Auth login={checkingLogin} />}</div>
			</Section>
		</Layout>
	);
};

export default Admin;

export const Head = () => <Seo title='Admin' />;
