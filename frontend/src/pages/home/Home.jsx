import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/home/Hero';
import FeaturedCategories from '../../components/home/FeaturedCategories';
import NewArrivals from '../../components/home/NewArrivals';
import PromoSections from '../../components/home/PromoSections';
import StoreSection from '../../components/home/StoreSection';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCategories />
      <NewArrivals />
      <PromoSections />
      <StoreSection />
      
      {/* Testimonials or additional sections can be added here */}
      <section className="testimonials section-padding" style={{ textAlign: 'center', backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <h2 className="section-title">What Our Patrons Say</h2>
          <div className="title-underline"></div>
          <p style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--color-gray-600)', maxWidth: '800px', margin: '2rem auto' }}>
            "Velora has redefined luxury for me. The craftsmanship in their sherwanis is unparalleled, and the service at the Jaipur showroom was truly world-class."
          </p>
          <span style={{ fontWeight: '700', color: 'var(--color-navy)' }}>- VIKRAM SINGH</span>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
