import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HomePageContext from './HomePageContext';

const HomePage = (): React.ReactElement => (
  <HomePageContext.Provider value={{}}>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Description of Home" />
    </Helmet>
    <div>HomePage</div>
    <Link to="/app1">Go to App 1</Link>
  </HomePageContext.Provider>
);

export default HomePage;
