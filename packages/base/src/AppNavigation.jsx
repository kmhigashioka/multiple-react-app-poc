import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AppNavigation.module.scss';

const AppNavigation = () => (
  <nav className={styles.container}>
    <ul className={styles.listContainer}>
      <li>
        <Link to="/app1">App 1</Link>
      </li>
      <li>
        <Link to="/app2">App 2</Link>
      </li>
      <li>
        <Link to="/app2/more-route">More Route</Link>
      </li>
    </ul>
  </nav>
);

export default AppNavigation;
