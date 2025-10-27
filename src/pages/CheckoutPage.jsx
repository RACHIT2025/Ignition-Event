import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './UtilityPages.module.css';

const CheckoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const eventName = id === '1' ? 'Cyberwave Music Festival Ticket' : 'Event Ticket';

  return (
    <motion.div 
      className={styles.utilityPage}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <h1 className={styles.pageTitle}>Simulated Checkout</h1>
      <p className={styles.subText}>
        You are reserving tickets for: **{eventName} (ID: {id})**
      </p>
      
      <div className={styles.contentBox}>
          <h2>Order Summary</h2>
          {/* ✅ CURRENCY CHANGE: $ to ₹ */}
          <p className={styles.orderItem}>1 x General Admission: **₹4500**</p>
          <p className={styles.orderItem}>Service Fee: **₹50**</p>
          <h3 className={styles.totalText}>Total Due: **₹4550**</h3>
          <p className={styles.paymentInfo}>
              *Payment Processing is simulated. This is a front-end only prototype.*
          </p>
      </div>

      <button className={styles.successButton} onClick={() => alert('Checkout SUCCESS! Tickets emailed.')}>
          Complete Secure Purchase
      </button>
      
      <button className={styles.backButton} onClick={() => navigate(-1)}>
          &larr; Back to Event Details
      </button>

    </motion.div>
  );
};

export default CheckoutPage;