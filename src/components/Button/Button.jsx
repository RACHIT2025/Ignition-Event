/*
The components directory is the building block layer of the application, housing all reusable UI elements like the Button, Header, Footer, and EventCard. This modular structure is key to scalability and code maintenance. By isolating visual and interactive elements into components, we ensure that changes made to a single element (such as the hover animation on the Button) are applied consistently everywhere it is used across the site. The components leverage CSS Modules for isolated styling and Framer Motion properties to deliver tactile, instantaneous visual feedback.
*/
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