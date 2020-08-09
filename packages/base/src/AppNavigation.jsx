import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AppNavigation.module.scss';

const AppNavigation = () => (
  <nav className={styles.container}>
    <ul className={styles.listContainer}>
      <li>
        <Link to="/app1">App 1</Link>
      </li>
    </ul>
  </nav>
);

export default AppNavigation;