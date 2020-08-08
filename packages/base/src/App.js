import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import MicroFrontend from './MicroFrontend';

const App1 = ({ history }) => (
  <MicroFrontend history={history} host="http://localhost:3001" name="App1" />
);

const App2 = ({ history }) => (
  <MicroFrontend history={history} host="http://localhost:3002" name="App2" />
);

function App() {
  return (
    <Router>
      <>
        <div>
          <Link to="/app1">App 1</Link>
        </div>
        <Switch>
          <Route exact path="/app1" component={App1} />
          <Route exact path="/app2" component={App2} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
