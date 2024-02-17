import React, { useEffect } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import { GOOGLE_ANALYTICS_ID } from './config/constants';

import Layout from './hoc/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import Services from './containers/Services/Services';
import Microblading from './containers/Services/Microblading';
import LumiEyes from './containers/Services/LumiEyes';
import Profhilo from './containers/Services/Profhilo';
import LemonBottle from './containers/Services/LemonBottle';
import EyesAndBrows from './containers/Services/EyesAndBrows';
import Gallery from './containers/Gallery/Gallery';
import Find from './containers/Find/Find';
import Admin from './containers/Admin/Admin';
import NotFound from './containers/NotFound/NotFound';
import Footer from './components/Footer/Footer';

import ReactGA from 'react-ga';

ReactGA.initialize(GOOGLE_ANALYTICS_ID);

const App = () => {
	const location = useLocation();

	useEffect(() => {
		ReactGA.pageview(location.pathname + location.search);
	}, [location]);

	return (
		<Layout>
			<Navigation />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/services' element={<Services />} />
				<Route path='/services/microblading' element={<Microblading />} />
				<Route path='/services/lumi-eyes' element={<LumiEyes />} />
				<Route path='/services/profhilo' element={<Profhilo />} />
				<Route path='/services/lemon-bottle' element={<LemonBottle />} />
				<Route path='/services/eyes-and-brows' element={<EyesAndBrows />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/find-us' element={<Find />} />
				<Route path='/admin' element={<Admin />} />
				<Route render={() => <NotFound />} />
			</Routes>

			<Footer />
		</Layout>
	);
};

export default App;

/*

font-family: 'Open Sans', sans-serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Josefin Slab', serif;

$alabaster: #F8F8F8;
$akaroa: #D7C2A4;
$copper: #B87332;
$tundora: #444444;

*/
