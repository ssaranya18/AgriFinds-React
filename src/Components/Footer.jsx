import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h4>About Us</h4>
            <p>
              We are dedicated to providing innovative solutions for sustainable agriculture. Our mission is to support farmers with top-quality products and services to enhance their productivity and profitability.
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/agri">Experts</Link></li>
              <li><Link to="/schemes">Schemes</Link></li>
              <li><Link to="/contactform">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: AgriFinds@agri.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Agri Street, Farmville, India</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 AgriFinds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
