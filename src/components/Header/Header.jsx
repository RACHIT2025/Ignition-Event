import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Ignition Events</Link>
      </div>
      <nav className={styles.nav}>
        <input type="text" placeholder="Search events, city, or category..." className={styles.searchBar} />
        <Link to="/search">
          <Button variant="secondary">Find Events</Button>
        </Link>
        <Link to="/create-event">
          <Button>Create Event</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;