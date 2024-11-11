import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaHome, FaSeedling, FaUsers, FaChartBar, FaCogs, FaSignOutAlt,
  FaBell, FaUserCircle, FaSearch
} from 'react-icons/fa';
import './AdminDashboard.css';

import Profile from './Profile';
import Home from './Home';
import UsersSection from './UsersSection';
import ExpertList from './ExpertList';
import ExpertForm from './ExpertForm';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import FertilizerList from './FertilizerList';
import FertilizerForm from './FertilizerForm';

const AdminDashboard = ({ adminName, adminEmail, setAdminName }) => {
  const [activeComponent, setActiveComponent] = useState(<Home />);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editingFertilizer, setEditingFertilizer] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAdminName('');
    navigate('/'); 
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setActiveComponent(<ProductForm product={product} onSave={handleSaveProduct} />);
  };

  const handleSaveProduct = (savedProduct) => {
    setActiveComponent(<ProductList onEdit={handleEditProduct} onDelete={handleDeleteProduct} />);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    // Here you would call an API to delete the product and then refresh the list
    setActiveComponent(<ProductList onEdit={handleEditProduct} onDelete={handleDeleteProduct} />);
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setActiveComponent(<ProductForm onSave={handleSaveProduct} />);
  };

  const handleEditFertilizer = (fertilizer) => {
    setEditingFertilizer(fertilizer);
    setActiveComponent(<FertilizerForm fertilizer={fertilizer} onSave={handleSaveFertilizer} />);
  };

  const handleSaveFertilizer = (savedFertilizer) => {
    setActiveComponent(<FertilizerList onEdit={handleEditFertilizer} onDelete={handleDeleteFertilizer} />);
    setEditingFertilizer(null);
  };

  const handleDeleteFertilizer = (fertilizerId) => {
    // Here you would call an API to delete the fertilizer and then refresh the list
    setActiveComponent(<FertilizerList onEdit={handleEditFertilizer} onDelete={handleDeleteFertilizer} />);
  };

  const handleAddFertilizer = () => {
    setEditingFertilizer(null);
    setActiveComponent(<FertilizerForm onSave={handleSaveFertilizer} />);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>AgriFinds</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li onClick={() => setActiveComponent(<Home />)}>
              <a href="#">
                <FaHome className="icon" /> Home
              </a>
            </li>
            <li onClick={() => setActiveComponent(<UsersSection />)}>
              <a href="#">
                <FaUsers className="icon" /> Users
              </a>
            </li>
            {/* <li onClick={() => setActiveComponent()}>
              <a href="#">
                <FaSeedling className="icon" /> Crops
              </a>
            </li> */}
            <li onClick={() => setActiveComponent(<ExpertList />)}>
              <a href="#">
                <FaUsers className="icon" /> Experts List
              </a>
            </li>
            <li onClick={() => setActiveComponent(<ExpertForm />)}>
              <a href="#">
                <FaUsers className="icon" /> Add Expert
              </a>
            </li>
            <li onClick={() => setActiveComponent(<ProductList onEdit={handleEditProduct} onDelete={handleDeleteProduct} />)}>
              <a href="#">
                <FaChartBar className="icon" /> Products
              </a>
            </li>
            <li onClick={() => handleAddProduct()}>
              <a href="#">
                <FaCogs className="icon" /> Add Product
              </a>
            </li>
            <li onClick={() => setActiveComponent(<FertilizerList onEdit={handleEditFertilizer} onDelete={handleDeleteFertilizer} />)}>
              <a href="#">
                <FaCogs className="icon" /> Fertilizers
              </a>
            </li>
            <li onClick={() => handleAddFertilizer()}>
              <a href="#">
                <FaCogs className="icon" /> Add Fertilizer
              </a>
            </li>
            
          </ul>
        </nav>
      </aside>

      <nav className="top-nav">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="top-nav-actions">
          <span className="admin-name">Welcome, {adminName}</span>
          <button className="notification-btn">
            <FaBell />
            <span className="notification-count">3</span>
          </button>
          <FaUserCircle className="profile-icon" onClick={toggleProfileMenu} />
        </div>
        {showProfileMenu && (
          <div className="profile-menu">
            <ul>
              <li onClick={() => setActiveComponent(<Home />)}>Home</li>
              <li onClick={() => setActiveComponent(<Profile adminName={adminName} adminEmail={adminEmail} />)}>Profile</li>
              <li onClick={() => setActiveComponent()}>Settings</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        )}
      </nav>

      <main className="dashboard-main">
        {activeComponent}
      </main>
    </div>
  );
};

export default AdminDashboard;
