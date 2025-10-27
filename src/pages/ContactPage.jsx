import React from 'react';
import { motion } from 'framer-motion';
import styles from './UtilityPages.module.css';

const ContactPage = () => {
    return (
        <motion.div 
            className={styles.utilityPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className={styles.pageTitle}>Get in Touch</h1>
            <p className={styles.subText}>Fill out the form below, or reach us via email for general inquiries.</p>
            
            <div className={styles.contentBox}>
                <form className={styles.contactForm} onSubmit={(e) => { e.preventDefault(); alert("Message Sent! We will get back to you shortly (simulated)."); }}>
                    <label>Your Name:</label>
                    <input type="text" placeholder="Full Name" required />
                    
                    <label>Your Email:</label>
                    <input type="email" placeholder="email@example.com" required />
                    
                    <label>Subject:</label>
                    <select required>
                        <option value="">-- Select Reason --</option>
                        <option>General Inquiry</option>
                        <option>Billing/Refund Question</option>
                        <option>Technical Support</option>
                    </select>

                    <label>Message:</label>
                    <textarea rows="5" placeholder="Your detailed message..." required></textarea>
                    
                    <button type="submit" className={styles.contactButton}>Send Message</button>
                </form>
            </div>

            <p className={styles.actionText}>
                Email us directly at: <a href="mailto:support@ignitionevents.com">support@ignitionevents.com</a>
            </p>
        </motion.div>
    );
};

export default ContactPage;