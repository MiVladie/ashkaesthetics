import React, { useEffect } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import { GOOGLE_ANALYTICS_ID } from './config/constants';

import Layout from './hoc/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Microblading from './pages/Services/Microblading';
import LumiEyes from './pages/Services/LumiEyes';
import Profhilo from './pages/Services/Profhilo';
import LemonBottle from './pages/Services/LemonBottle';
import EyesAndBrows from './pages/Services/EyesAndBrows';
import Gallery from './pages/Gallery/Gallery';
import Find from './pages/Find/Find';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/NotFound/NotFound';
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
