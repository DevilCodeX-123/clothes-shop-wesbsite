import React from 'react';
import Layout from '../../components/layout/Layout';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import './Boutique.css';

const boutiques = [
  {
    id: 1,
    name: 'Velora Jaipur (Flagship)',
    address: '102-105 Civic Center, M.I. Road, Jaipur, Rajasthan - 302001',
    phone: '+91 141 236 5588',
    email: 'jaipur@velora.in',
    hours: '10:30 AM - 08:30 PM',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Velora Delhi',
    address: 'Ground Floor, DLF Emporio, Vasant Kunj, New Delhi - 110070',
    phone: '+91 11 4609 8202',
    email: 'delhi@velora.in',
    hours: '11:00 AM - 09:00 PM',
    image: 'https://images.unsplash.com/photo-1582037928867-173811213389?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Velora Mumbai',
    address: 'Adani Inspire, BKC, G Block, Mumbai, Maharashtra - 400051',
    phone: '+91 22 6678 1234',
    email: 'mumbai@velora.in',
    hours: '10:30 AM - 08:30 PM',
    image: 'https://images.unsplash.com/photo-1594938384824-022ef62953e5?auto=format&fit=crop&q=80&w=800'
  }
];

const Boutique = () => {
  return (
    <Layout>
      <div className="boutique-page">
        <section className="boutique-header">
          <div className="container">
            <h1>Our Boutiques</h1>
            <p>Visit our sanctuary of heritage and style across India</p>
          </div>
        </section>

        <section className="boutiques-list container section-padding">
          <div className="boutiques-grid">
            {boutiques.map(boutique => (
              <div key={boutique.id} className="boutique-card">
                <div className="boutique-image">
                  <img src={boutique.image} alt={boutique.name} />
                </div>
                <div className="boutique-info">
                  <h2>{boutique.name}</h2>
                  <div className="info-item">
                    <FiMapPin className="icon" />
                    <p>{boutique.address}</p>
                  </div>
                  <div className="info-item">
                    <FiPhone className="icon" />
                    <p>{boutique.phone}</p>
                  </div>
                  <div className="info-item">
                    <FiMail className="icon" />
                    <p>{boutique.email}</p>
                  </div>
                  <div className="info-item">
                    <FiClock className="icon" />
                    <p>{boutique.hours}</p>
                  </div>
                  <button className="book-btn">BOOK AN APPOINTMENT</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="map-section section-padding">
          <div className="container">
            <div className="map-placeholder">
              <FiMapPin size={48} color="var(--color-gold)" />
              <h3>Interactive Store Locator Coming Soon</h3>
              <p>We are integrating Google Maps for a better experience.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Boutique;
