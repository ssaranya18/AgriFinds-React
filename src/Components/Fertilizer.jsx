import React from 'react';
import {Link} from 'react-router-dom';
import './Fertilizer.css';

const Fertilizer = () => {
  return (
    <div className="fertilizer-component">
      <div className="fertilizer-page">
        {/* Hero Section */}
        <section className="hero1">
          <div className="hero-content1">
            <h2>Optimize Your Crops with the Right Fertilizers</h2>
            <p>Unlock the potential of your soil and boost crop yields sustainably.</p>
          </div>
        </section>

        {/* Types of Fertilizers Section */}
        <section className="types">
          <h2>Types of Fertilizers</h2>
          <div className="types-grid">
            <div className="type-card">
              <h3>Nitrogen Fertilizers</h3>
              <p>Essential for leaf growth and chlorophyll production. Examples include urea and ammonium nitrate.</p>
            </div>
            <div className="type-card">
              <h3>Phosphorus Fertilizers</h3>
              <p>Boost root development and flowering. Examples are superphosphate and ammonium phosphate.</p>
            </div>
            <div className="type-card">
              <h3>Potassium Fertilizers</h3>
              <p>Enhances drought resistance and overall plant health. Potassium sulfate and muriate of potash are common forms.</p>
            </div>
            <div className="type-card">
              <h3>Organic Fertilizers</h3>
              <p>Derived from natural sources like compost and manure. They improve soil structure and biodiversity.</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits">
          <h2>Benefits of Using Fertilizers</h2>
          <ul>
            <li>Increases crop yield and quality.</li>
            <li>Promotes healthy and robust plant growth.</li>
            <li>Enhances soil fertility and nutrient levels.</li>
            <li>Supports sustainable farming practices.</li>
          </ul>
          <img src="https://english.makalukhabar.com/wp-content/uploads/2021/04/%E0%A4%98%E0%A4%85.jpg" alt="Fertilizer Benefits" className="benefits-image" />
        </section>

        {/* Fertilizer Tips Section */}
        <section className="tips">
          <h2>Fertilizer Usage Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Soil Testing</h3>
              <p>Conduct soil tests to determine nutrient requirements before applying fertilizers.</p>
            </div>
            <div className="tip-card">
              <h3>Correct Dosage</h3>
              <p>Follow recommended dosage instructions to prevent nutrient burn and waste.</p>
            </div>
            <div className="tip-card">
              <h3>Application Timing</h3>
              <p>Apply fertilizers at the right growth stage for maximum absorption and efficiency.</p>
            </div>
            <div className="tip-card">
              <h3>Balanced Nutrients</h3>
              <p>Use a balanced mix of nutrients tailored to the specific crop's needs.</p>
            </div>
          </div>
        </section>
        {/* <Link to='/products'>
        <button className='pro-button'>VIEW PRODUCTS</button>
        </Link> */}

        {/* Call to Action Section */}
        <section className="call-to-action">
          <h2>Get Expert Fertilizer Advice</h2>
          <p>Contact us for personalized fertilizer recommendations and sustainable farming practices.</p>
          <Link to="/contact">
          <button className="cta-button">Contact Us</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Fertilizer;
