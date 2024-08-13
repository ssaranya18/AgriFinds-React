import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo4.jpg';
import { FaUser, FaLock } from 'react-icons/fa';

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleNavigation = (path) => {
    setIsLoginModalOpen(false);
    navigate(path);
  };

  useEffect(() => {
    if (isLoginModalOpen) {
      document.body.style.overflow = 'hidden';
      document.querySelector('.page-content').classList.add('blur-background');
    } else {
      document.body.style.overflow = 'unset';
      document.querySelector('.page-content').classList.remove('blur-background');
    }
  }, [isLoginModalOpen]);

  return (
    <>
      <div className="page-content">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="AgriFinds Logo" className="logo-image" />
            <Link to="/">AgriFinds</Link>
          </div>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/crops">Crops</Link></li>
            <li><Link to="/agri">Experts</Link></li>
            <li><Link to="/fertilizer">Fertilizer</Link></li>
            <li><Link to="/schemes">Schemes</Link></li>
            <li><a href="#" onClick={handleLoginClick}>Login</a></li>
          </ul>
        </nav>
        {/* Add other page content here */}
      </div>

      {isLoginModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-options">
              <div onClick={() => handleNavigation('/login')} className="modal-option">
                <FaUser className="modal-icon" />
                <span>User</span>
              </div>
              <div onClick={() => handleNavigation('/AdminLogin')} className="modal-option">
                <FaLock className="modal-icon" />
                <span>Admin</span>
              </div>
            </div>
            <button className="close-btn" onClick={handleCloseModal}>CLOSE</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
