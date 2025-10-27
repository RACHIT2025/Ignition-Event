import React, { useState } from 'react';
import EventCard from '../components/EventCard/EventCard';
import styles from './SearchPage.module.css';
import { motion } from 'framer-motion';
import Button from '../components/Button/Button';

// Dummy event data (Prices are now in Rupees, stored as numbers for filtering)
const initialEvents = [
  { id: '1', title: 'Cyberwave Music Festival', date: 'Oct 26, 2025', location: 'The Zenith Arena', price: 4500, type: 'Music' },
  { id: '2', title: 'Quantum Computing Workshop', date: 'Nov 12, 2025', location: 'Innovation Hub', price: 12000, type: 'Tech' },
  { id: '3', title: 'Luminous Night Run 5K', date: 'Dec 01, 2025', location: 'Central Park', price: 250, type: 'Sports' },
  { id: '4', title: 'Abstract NFT Art Gala', date: 'Jan 15, 2026', location: 'Gallery X', price: 0, type: 'Arts' }, // Free event
  { id: '5', title: 'AI Marketing Masterclass', date: 'Feb 03, 2026', location: 'Online Event', price: 6000, type: 'Tech' },
  { id: '6', title: 'Starlight Symphony Concert', date: 'Mar 08, 2026', location: 'Grand Opera House', price: 5200, type: 'Music' },
  { id: '7', title: 'Robotics Design Workshop', date: 'Apr 10, 2026', location: 'Tech Lab 101', price: 300, type: 'Tech' },
  { id: '8', title: 'Vintage Car Show & VR Demo', date: 'May 22, 2026', location: 'Exhibition Grounds', price: 150, type: 'Arts' },
  { id: '9', title: 'Summer Jazz Night', date: 'Jun 18, 2026', location: 'City Gardens', price: 600, type: 'Music' },
];

const SearchPage = () => {
    // State to hold the list of events currently displayed
    const [events, setEvents] = useState(initialEvents);
    // State to track filter settings (simple simulation: max price)
    const [maxPrice, setMaxPrice] = useState(15000); // Default high value
    const [filteredOnce, setFilteredOnce] = useState(false);

    const handleFilter = () => {
        setFilteredOnce(true);
        // NOTE: The `price` in initialEvents is now a Number, so we can filter correctly.
        const filteredList = initialEvents.filter(event => {
            // Simulated Filtering Logic:
            return event.price <= maxPrice;
        });

        setEvents(filteredList);
    };

    const handleReset = () => {
        setEvents(initialEvents);
        setMaxPrice(15000);
        setFilteredOnce(false);
    };

    return (
        <div className={styles.searchPage}>
            <h1 className={styles.pageTitle}>Explore All Events</h1>
            <div className={styles.contentWrapper}>
                <aside className={styles.sidebar}>
                    <h3>Filters</h3>
                    <div className={styles.filterGroup}>
                        <h4>Price</h4>
                        <label><input type="checkbox" onClick={handleReset} /> All Events</label>
                        <label><input type="checkbox" onClick={() => setMaxPrice(0)} /> Free Only</label>
                        <label><input type="checkbox" onClick={() => setMaxPrice(500)} /> Under ₹500</label>
                        
                        <h4 style={{ marginTop: '20px' }}>Max Price: ₹{maxPrice.toLocaleString('en-IN')}</h4>
                        <input 
                            type="range" 
                            min="0" 
                            max="15000" 
                            step="500" // Added a step for smoother input
                            value={maxPrice} 
                            onChange={(e) => setMaxPrice(Number(e.target.value))} 
                        /> 
                    </div>

                    <div className={styles.filterGroup}>
                        <h4>Date & Type</h4>
                        <label><input type="checkbox" /> This Weekend</label>
                        <label><input type="checkbox" /> Music / Concerts</label>
                        <label><input type="checkbox" /> Technology / IT</label>
                    </div>

                    <Button onClick={handleFilter} style={{ marginBottom: '15px' }}>
                        Apply Filter
                    </Button>
                    <Button variant="secondary" onClick={handleReset}>
                        Reset Filters
                    </Button>

                </aside>
                <section className={styles.resultsContainer}>
                    {/* Filter Results Output Logic */}
                    {events.length > 0 ? (
                        <motion.div className={styles.resultsGrid} key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            {events.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </motion.div>
                    ) : filteredOnce ? (
                        <motion.div key="no-results" className={styles.noResults} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                            <h2>❌ No Tickets Found in Range ❌</h2>
                            <p>Try resetting your filters or adjusting the max price. Max price selected: ₹{maxPrice.toLocaleString('en-IN')}</p>
                            <Button onClick={handleReset}>Reset Filters</Button>
                        </motion.div>
                    ) : (
                        <motion.div key="initial-load" className={styles.initialMessage} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <h2>Start Your Search</h2>
                            <p>Use the filters on the left to find events that match your budget and interests.</p>
                        </motion.div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default SearchPage;