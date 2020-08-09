import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderApp1 = (containerId, history) => {
  ReactDOM.render(<App history={history} />, document.getElementById(containerId));
  serviceWorker.unregister();
};

window.unmountApp1 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
