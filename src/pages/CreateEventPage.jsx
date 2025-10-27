import React from 'react';
import { motion } from 'framer-motion';
import styles from './UtilityPages.module.css';

const CreateEventPage = () => {
  return (
    <motion.div 
      className={styles.utilityPage}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.pageTitle}>Create an Extraordinary Event</h1>
      <motion.p 
        className={styles.subText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        This is a simulated organizer portal. In a full application, this page would contain forms for event details, ticketing, and marketing tools.
      </motion.p>
      
      <div className={styles.contentBox}>
          <h2>Event Creation Steps (Simulated)</h2>
          <ol>
              <li>Define Event Name & Type</li>
              <li>Set Date, Time, and Location</li>
              <li>Design Custom Ticketing Tiers</li>
              <li>Publish and Promote!</li>
          </ol>
      </div>

      <p className={styles.actionText}>
          Thank you for igniting a new experience! (Functionality ends here.)
      </p>

    </motion.div>
  );
};

export default CreateEventPage; // ✅ FIX: Added export