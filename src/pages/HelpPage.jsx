import React from 'react';
import { motion } from 'framer-motion';
import styles from './UtilityPages.module.css';
import { Link } from 'react-router-dom';

const HelpPage = () => {
    return (
        <motion.div 
            className={styles.utilityPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className={styles.pageTitle}>Help Center & FAQs</h1>
            <p className={styles.subText}>Find answers to common questions about ticketing, refunds, and events.</p>
            
            <div className={styles.contentBox}>
                <h2>Popular Topics</h2>
                <div className={styles.faqList}>
                    <details>
                        <summary>How do I get a refund?</summary>
                        <p>Refunds are processed according to the event organizer's policy. Please check the specific event page details. Generally, refunds are not issued for events less than 7 days away.</p>
                    </details>
                    <details>
                        <summary>Can I transfer my ticket?</summary>
                        <p>Yes, all digital tickets are transferable through your account dashboard until 24 hours before the event start time.</p>
                    </details>
                    <details>
                        <summary>My event was cancelled. What now?</summary>
                        <p>Don't worry! You will receive an automatic full refund within 3-5 business days.</p>
                    </details>
                </div>
                <p style={{ marginTop: '20px' }}>
                    Still need help? <Link to="/contact" className={styles.actionLink}>Contact our support team.</Link>
                </p>
            </div>
        </motion.div>
    );
};

export default HelpPage;