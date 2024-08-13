import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Crops from './Components/Crops';
import About from './Components/About';
import Contact from './Components/Contact';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import GetStarted from './Components/GetStarted';
import AgriExperts from './Components/AgriExperts';
import Fertilizer from './Components/Fertilizer';
import SchemesPage from './Components/Schemes';
import Payment from './Components/Payment';
import ContactForm from './Components/ContactForm';
import StorePage from './Components/StorePage';
import Seeds from './Components/Seeds';
import FertilizersProducts from './Components/FertilizerProducts';
import Shop from './Components/Shop';
import LikedProducts from './Components/LikedProducts';
import ShopFertilizers from './Components/ShopFertilizers';
import Blog from './Components/Blog';
import CropsDetailsPage from './Components/CropsDetailsPage';
import ScheduleConsultation from './Components/ScheduleConsultation';
import VideoTutorials from './Components/VideoTutorials';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminSignup from './Components/Admin/AdminSignup';
import Cart from './Components/Cart';

function App() {
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');

  return (
    <Router>
      <MainContent 
        adminName={adminName} 
        setAdminName={setAdminName} 
        adminEmail={adminEmail} 
        setAdminEmail={setAdminEmail} 
      />
    </Router>
  );
}

function MainContent({ adminName, setAdminName, adminEmail, setAdminEmail }) {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/login' && 
       location.pathname !== '/register' && 
       location.pathname !== '/ScheduleConsultation' &&
       location.pathname !== '/Admin' && (
        <Navbar adminName={adminName} />
      )}
      
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/agri" element={<AgriExperts />} />
        <Route path="/schemes" element={<SchemesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/fertilizer" element={<Fertilizer />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/storepage" element={<StorePage />} />
        <Route path="/seeds-products" element={<Seeds />} />
        <Route path="/fertilizers-products" element={<FertilizersProducts />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/LikedProducts" element={<LikedProducts />} />
        <Route path="/fertilizerproducts" element={<ShopFertilizers />} />
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/cropdetails" element={<CropsDetailsPage />} />
        <Route path="/ScheduleConsultation" element={<ScheduleConsultation />} />
        <Route path="/video-tutorials" element={<VideoTutorials />} />
        <Route path="/Admin" element={<AdminDashboard adminName={adminName} setAdminName={setAdminName} />} />
        <Route path="/AdminLogin" element={<AdminLogin setAdminName={setAdminName} setAdminEmail={setAdminEmail} />} />
        <Route path="/AdminSignup" element={<AdminSignup />} />
      </Routes>

      <ConditionalFooter />
    </div>
  );
}

function ConditionalFooter() {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/ScheduleConsultation') {
    return null;
  }

  
}

export default App;
