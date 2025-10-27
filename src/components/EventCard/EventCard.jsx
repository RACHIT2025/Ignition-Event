import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EventCard.module.css';
import placeholderImage from "../../assets/event-placeholder.png"; 
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
  const { id, title, date, location, price, imageUrl } = event;

  return (
    <Link to={`/event/${id}`} className={styles.cardLink}>
      <div className={styles.eventCard}>
        <div className={styles.imageWrapper}>
          <motion.img
            src={imageUrl || placeholderImage} 
            alt={title} 
            className={styles.eventImage}
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.3 }}
          />
          <span className={styles.eventDate}>{date}</span>
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.eventTitle}>{title}</h3>
          <p className={styles.eventLocation}>{location}</p>
          <p className={styles.eventPrice}>{price === 'Free' ? 'FREE ENTRY' : `₹${price}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;