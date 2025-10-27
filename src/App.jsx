import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import EventDetailsPage from './pages/EventDetailsPage';
import SearchPage from './pages/SearchPage';
import CreateEventPage from './pages/CreateEventPage'; 
import CheckoutPage from './pages/CheckoutPage'; 
import HelpPage from './pages/HelpPage';       
import ContactPage from './pages/ContactPage'; 

function App() {
  return (
    <Router>
      <Header />
      <main style={{ flexGrow: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event/:id" element={<EventDetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/create-event" element={<CreateEventPage />} /> 
          <Route path="/checkout/:id" element={<CheckoutPage />} /> 
          <Route path="/help" element={<HelpPage />} />       
          <Route path="/contact" element={<ContactPage />} />   
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;