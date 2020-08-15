// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import App from './containers/App';
import Language from './containers/Language';
import * as serviceWorker from './serviceWorker';
import { translationMessages } from './containers/Language/i18n';

declare global {
  interface Window {
    renderApp2: any;
    unmountApp1: any;
  }
}

window.renderApp2 = (containerId, history) => {
  ReactDOM.render(
    <Router history={history}>
      <Language messages={translationMessages}>
        <HelmetProvider>
          <Helmet>
            <meta name="description" content="" />
          </Helmet>
          <App />
        </HelmetProvider>
      </Language>
    </Router>,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmountApp1 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
