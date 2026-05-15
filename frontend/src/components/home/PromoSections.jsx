import React from 'react';
import './PromoSections.css';

const PromoSections = () => {
  return (
    <section className="promo-sections section-padding">
      <div className="container promo-grid">
        {/* Large Left Banner */}
        <div className="promo-banner large glass-effect">
          <img src="https://images.unsplash.com/photo-1594938384824-022ef62953e5?auto=format&fit=crop&q=80&w=1200" alt="Wedding Collection" />
          <div className="promo-content center">
            <span className="promo-tag">THE WEDDING EDIT</span>
            <h2>Exquisite Bridal & Groom Wear</h2>
            <button className="promo-btn">BROWSE COLLECTION</button>
          </div>
        </div>

        {/* Two Right Banners */}
        <div className="promo-stack">
          <div className="promo-banner small dark">
            <img src="https://images.unsplash.com/photo-1590117591724-82746ca1f435?auto=format&fit=crop&q=80&w=800" alt="Diwali Special" />
            <div className="promo-content">
              <span className="promo-tag">DIWALI SPECIAL</span>
              <h3>Light Up the Season</h3>
              <p>Flat 20% off on Festive Selections</p>
              <button className="text-btn">SHOP THE SALE</button>
            </div>
          </div>
          
          <div className="promo-banner small light">
            <img src="https://images.unsplash.com/photo-1610030469618-d069b27520e5?auto=format&fit=crop&q=80&w=800" alt="The Silk Route" />
            <div className="promo-content">
              <span className="promo-tag">BOUTIQUE EXCLUSIVE</span>
              <h3>The Silk Route</h3>
              <p>Explore rare hand-woven textiles from across India</p>
              <button className="text-btn">VIEW LOOKBOOK</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSections;
