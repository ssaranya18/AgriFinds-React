import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'; 

const Banner = () => {
  return (
    <div className='bcnt'>
    <section className="banner">
      <div className="banner-content">
        <h1 className="banner-heading">Agriculture is the most healthful, most useful and 
            most noble employment of man</h1>
        <div className="banner-buttons">
          {/* <button className="btn learn-more">Learn More <span className="arrow">→</span></button> */}
          <Link to="/contactform">
          <button className="btn contact-us">Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Banner;
