import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppProps } from './types';
import AppContext from './AppContext';

import HomePage from '../HomePage/Loadable';
import MoreRoutePage from '../MoreRoutePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';

const App: React.FC<AppProps> = () => (
  <AppContext.Provider value={{}}>
    <Helmet
      titleTemplate="%s - react-jump-start"
      defaultTitle="react-jump-start"
    >
      <meta name="description" content="" />
    </Helmet>
    <Switch>
      <Route path="/app2" exact component={HomePage} />
      <Route path="/app2/more-route" exact component={MoreRoutePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </AppContext.Provider>
);

export default App;
