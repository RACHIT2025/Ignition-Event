import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Ignition Events</h4>
          <p>Ignite your passion, find your community. Where extraordinary moments begin.</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Discover</Link></li>
            <li><Link to="/search">Categories</Link></li>
            <li><Link to="/create-event">List Your Event</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Support</h4>
          <ul>
            <li><Link to="/help">Help Center</Link></li>      
            <li><Link to="/contact">Contact Us</Link></li>    
            <li><a href="#">Terms & Privacy</a></li>          
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Ignition Events. Designed for an extraordinary front-end experience.
      </div>
    </footer>
  );
};

export default Footer;