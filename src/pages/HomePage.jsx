import React from 'react';
import EventCard from '../components/EventCard/EventCard';
import styles from './HomePage.module.css';
import { motion } from 'framer-motion';
import placeholderImage from "../assets/event-placeholder.png"; 

// Dummy event data (Prices updated to Rupees)
const events = [
  { id: '1', title: 'Cyberwave Music Festival', date: 'Oct 26, 2025', location: 'The Zenith Arena', price: '4500' },
  { id: '2', title: 'Quantum Computing Workshop', date: 'Nov 12, 2025', location: 'Innovation Hub', price: '12000' },
  { id: '3', title: 'Luminous Night Run 5K', date: 'Dec 01, 2025', location: 'Central Park', price: '250' },
  { id: '4', title: 'Abstract NFT Art Gala', date: 'Jan 15, 2026', location: 'Gallery X', price: 'Free' },
  { id: '5', title: 'AI Marketing Masterclass', date: 'Feb 03, 2026', location: 'Online Event', price: '6000' },
  { id: '6', title: 'Starlight Symphony Concert', date: 'Mar 08, 2026', location: 'Grand Opera House', price: '5200' },
];

// --- Framer Motion Variants for Staggered Animation ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  },
};
// ------------------------------

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection} style={{ backgroundImage: `linear-gradient(rgba(20, 20, 43, 0.8), rgba(20, 20, 43, 0.8)), url(${placeholderImage})` }}>
        <h1>Ignite Your Experience. Find Your Event.</h1>
        <p>Discover unique events, from cosmic concerts to future tech summits.</p>
      </section>

      <section className={styles.eventsGridSection}>
        <h2>Upcoming Highlights</h2>
        
        <motion.div 
            className={styles.eventsGrid}
            variants={containerVariants}
            initial="hidden" 
            animate="visible" 
        >
          {events.map((event, index) => (
            <motion.div 
                key={event.id} 
                className={`${styles.gridItem} ${index % 3 === 0 ? styles.offsetLeft : index % 3 === 2 ? styles.offsetRight : ''}`}
                variants={itemVariants} 
            >
                <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className={styles.categoriesSection}>
        <h2>Explore Categories</h2>
        <div className={styles.categoriesGrid}>
          {['Music', 'Tech', 'Arts & Culture', 'Sports & Fitness', 'Food & Drink', 'Workshops'].map(cat => (
              <motion.div 
                  key={cat} 
                  className={styles.categoryCard}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 255, 255, 0.7)' }}
                  whileTap={{ scale: 0.98 }}
              >
                  {cat}
              </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;