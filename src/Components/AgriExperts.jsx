// src/Components/AgriExperts.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AgriExperts.css';

const AgriExperts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    window.scroll(0,0);
    // Fetch experts from backend
    fetch('http://localhost:8080/api/experts')
      .then(response => response.json())
      .then(data => setExperts(data))
      .catch(error => console.error('Error fetching experts:', error));
  }, []);

  return (
    <div className="agri-experts">
      <section className="header">
        <div className="header-content">
          <h1>Meet Our Agricultural Experts</h1>
          <p>Learn from the best in the field of agriculture and sustainable farming.</p>
        </div>
      </section>

      <section className="experts-section">
        <h2>Our Experts</h2>
        <div className="experts-grid">
          {experts.map((expert) => (
            <div className="expert-card" key={expert.id}>
              <img src={expert.image} alt={`${expert.name}`} className="expert-image" />
              <div className="expert-info">
                <h3>{expert.name}</h3>
                <p className="expert-domain">{expert.domain}</p>
                <p className="expert-experience">{expert.experience} years of experience</p>
                <p className="expert-description">{expert.description}</p>
                {/* <h4>Achievements</h4>
                <ul className="achievements-list">
                  {expert.achievements && typeof expert.achievements === 'string'
                    ? expert.achievements.split(',').map((achievement, idx) => (
                        <li key={idx}>{achievement.trim()}</li>
                      ))
                    : <li>No achievements listed</li>} */}
                {/* </ul> */}
                <p className='expert-email'>
                  Email: <a href={`mailto:${expert.email}`}>{expert.email}</a>
                </p>
                <p className='expert-phone'>
                  Phone: <a href={`tel:${expert.phone}`}>{expert.phone}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="call-to-action">
        <h2>Want to Connect with Our Experts?</h2>
        <p>Contact us today to schedule a consultation with our agricultural experts and take your farming to the next level.</p>
        <Link to="/ScheduleConsultation">
          <button className="cta-button">Contact Us</button>
        </Link>
      </section>
    </div>
  );
};

export default AgriExperts;
