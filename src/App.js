import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import Services from './containers/Services/Services';
import Gallery from './containers/Gallery/Gallery';
import Find from './containers/Find/Find';
import NotFound from './containers/NotFound/NotFound';
import Footer from './components/Footer/Footer';

const app = () => (
  <Layout>

    <Route render = { ({ location }) => (
      <React.Fragment>
        <Navigation />

        <Switch location = { location }>
          <Route path = '/' exact component = { Home } />
          <Route path = '/services' exact component = { Services } />
          <Route path = '/gallery' exact component = { Gallery } />
          <Route path = '/find-us' exact component = { Find } />
          <Route render = { () => <NotFound /> } />
        </Switch>

        <Footer />

      </React.Fragment>
    )} />

  </Layout>
);

export default app;

/*

font-family: 'Open Sans', sans-serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Josefin Slab', serif;

$alabaster: #F8F8F8;
$akaroa: #D7C2A4;
$muddy: #B8925D;
$tundora: #444444;

*/
