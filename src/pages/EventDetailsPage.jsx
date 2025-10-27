import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './EventDetailsPage.module.css';
import Button from '../components/Button/Button';
import placeholderImage from "../assets/event-placeholder.png"; 
import { motion } from 'framer-motion';

// Dummy data for a single event details (Price in Rupees)
const dummyEvent = {
  id: '1',
  title: 'Cyberwave Music Festival: Future Sounds',
  date: 'Saturday, October 26, 2025',
  time: '7:00 PM - 2:00 AM EST',
  location: 'The Zenith Arena, 404 System Loop, New Metro City',
  price: '4500', // Changed to Rupees
  description: `Dive into an otherworldly experience at the Cyberwave Music Festival! Featuring a lineup of stellar DJs, immersive light installations, and gourmet synth-food vendors, this event promises to be an unforgettable journey through sound and light. Prepare for a night of pulsating beats and celestial visuals. Don't miss out on the most anticipated cosmic gathering of the year!
  
  Age Restriction: 18+ only. ID required for entry.
  Dress Code: Futuristic or cyber-punk attire is mandatory!`,
  organizer: 'Stellar Productions',
  imageUrl: placeholderImage,
};

const EventDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const event = dummyEvent; 

  if (!event) { return <p className={styles.loading}>Event not found...</p>; }

  return (
    <div className={styles.eventDetailsPage}>
      <div className={styles.heroSection} style={{ backgroundImage: `url(${event.imageUrl})` }}>
        <div className={styles.heroOverlay}>
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {event.title}
          </motion.h1>
          <motion.p 
            className={styles.heroDate}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {event.date} • {event.time}
          </motion.p>
          <p className={styles.heroLocation}>{event.location}</p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.detailsColumn}>
          <section className={styles.aboutSection}>
            <h2>About this Event</h2>
            <p>{event.description}</p>
          </section>

          <section className={styles.locationSection}>
            <h2>Location</h2>
            <p>{event.location}</p>
            <div className={styles.mapPlaceholder}>
              <p>Map Placeholder - Location Simulation</p>
            </div>
          </section>
        </div>

        <div className={styles.sidebarColumn}>
          <motion.div 
            className={styles.ticketBox}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          >
            {/* ✅ CURRENCY CHANGE: $ to ₹ */}
            <p className={styles.ticketPrice}>Tickets from ₹{event.price}</p>
            <Button onClick={() => navigate(`/checkout/${event.id}`)}>
              Get Tickets
            </Button>
            <p className={styles.organizerInfo}>
              Organized by: <strong>{event.organizer}</strong>
            </p>
          </motion.div>

          <div className={styles.shareBox}>
            <h3>Share</h3>
            <div className={styles.shareButtons}>
              <button className={styles.shareButton} onClick={() => alert('Share to Facebook!')}>Facebook</button>
              <button className={styles.shareButton} onClick={() => alert('Share to Twitter!')}>X (Twitter)</button>
              <button className={styles.shareButton} onClick={() => alert('Copy Link!')}>Copy Link</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;