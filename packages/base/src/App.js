import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AppNavigation from './AppNavigation';
import MicroFrontend from './MicroFrontend';
import styles from './App.module.scss';

const App1 = ({ history }) => (
  <MicroFrontend history={history} host="http://localhost:3001" name="App1" />
);

const App2 = ({ history }) => (
  <MicroFrontend history={history} host="http://localhost:3002" name="App2" />
);

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <AppNavigation />
        <Switch>
          <Route exact path="/app1" component={App1} />
          <Route exact path="/app2" component={App2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
