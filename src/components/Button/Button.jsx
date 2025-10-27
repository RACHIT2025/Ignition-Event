import React from 'react';
import styles from './Button.module.css';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', ...props }) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;
  
  return (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      {...props}
      
      whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0, 255, 255, 0.7)' }} 
      whileTap={{ scale: 0.95 }} 
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;