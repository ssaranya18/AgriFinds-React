import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';
import Footer from './Footer';
import OrganicFarmSection from './OrganicForm';
import Banner from './Banner';
import StorePage from './StorePage';

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to AgriFinds</h1>
          <p>Your Comprehensive Agricultural Management Solution</p>
          <Link to="/get-started">
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
      </section>

      
      {/* <section className="about">
        <div className="about-content">
          <h2>About AgriFinds</h2>
          <p>
          AgriFinds is designed to revolutionize the way farmers, agronomists, and agricultural businesses operate. 
          By providing a platform that integrates crop management, weather forecasting, and resource allocation, 
          AgriFinds helps you make informed decisions to boost productivity and sustainability.
          </p>
        </div>
        <img src="https://img.freepik.com/premium-photo/young-woman-with-tablet-taking-care-growing-cabbage_274679-28796.jpg" alt="About Agriculture" className="about-image" />
      </section> */}

      

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"AgriFinds has transformed my farming business. The insights and management tools have boosted my productivity significantly!"</p>
            <h4>- John Doe, Farmer</h4>
          </div>
          <div className="testimonial-card">
            <p>"With AgriFinds, I can make data-driven decisions that improve efficiency and profitability. It's a game-changer for agronomists!"</p>
            <h4>- Jane Smith, Agronomist</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Ready to Transform Your Agricultural Operations?</h2>
        <Link to="/register">
          <button className="cta-button">Join Us Now</button>
        </Link>
      </section>
      <StorePage/>
      <OrganicFarmSection/>
      <Banner/>
      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Crop Management</h3>
            <p>Monitor crop health, manage sowing schedules, and optimize yields with our advanced tools.</p>
          </div>
          <div className="feature-card">
            <h3>Weather Forecasting</h3>
            <p>Stay ahead of the weather with accurate forecasts and real-time alerts.</p>
          </div>
          <div className="feature-card">
            <h3>Resource Planning</h3>
            <p>Efficiently manage resources like water, fertilizer, and manpower.</p>
          </div>
          <div className="feature-card">
            <h3>Market Insights</h3>
            <p>Gain valuable insights into market trends and pricing to maximize your profits.</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
