import React from 'react';
import Layout from '../../components/layout/Layout';
import './About.css';

const About = () => {
  return (
    <Layout>
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1 className="about-title">The Velora Story</h1>
            <p className="about-subtitle">Defining Modern Indian Luxury Since 2012</p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="about-section container">
          <div className="about-grid">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800" alt="Craftsmanship" />
            </div>
            <div className="about-content">
              <span className="section-tag">OUR PHILOSOPHY</span>
              <h2>Accessible Prestige</h2>
              <p>
                Velora was born out of a desire to bridge the gap between traditional Indian craftsmanship and the global contemporary silhouette. We believe that true luxury should be experienced, not just displayed.
              </p>
              <p>
                Our philosophy, "Accessible Prestige," ensures that every garment we create carries the weight of history and the lightness of modern style, made available to the discerning modern connoisseur.
              </p>
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="about-section dark">
          <div className="container">
            <div className="about-grid reverse">
              <div className="about-content">
                <span className="section-tag">THE ART OF JAIPUR</span>
                <h2>Mastering the Threads</h2>
                <p>
                  Every Velora piece starts its journey in the heart of Jaipur. Our master artisans, many of whom are the 4th generation of weavers and embroiderers, bring a level of detail that machines can never replicate.
                </p>
                <div className="craft-stats">
                  <div className="stat">
                    <h4>50+</h4>
                    <span>Master Artisans</span>
                  </div>
                  <div className="stat">
                    <h4>12</h4>
                    <span>Years of Excellence</span>
                  </div>
                  <div className="stat">
                    <h4>100%</h4>
                    <span>Hand-stitched Details</span>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <img src="https://images.unsplash.com/photo-1610030469618-d069b27520e5?auto=format&fit=crop&q=80&w=800" alt="Weaving" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values container section-padding">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <div className="title-underline"></div>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <h3>Authenticity</h3>
              <p>We remain true to our roots, using only traditional techniques and genuine materials.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We continuously reinvent traditional styles for the modern global lifestyle.</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>Our slow-fashion approach ensures ethical production and enduring quality.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
