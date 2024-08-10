import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
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



function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="*" element={<>
        <Navbar />        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crops" element={<Crops />} />
            <Route path="/agri" element={<AgriExperts />} />
            <Route path="/schemes" element={<SchemesPage/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />            
            <Route path="/get-started" element={<GetStarted />} /> 
            <Route path="/fertilizer" element={<Fertilizer/>}/>
            <Route path="/payment/:id" element={<Payment />} />
            <Route path="/contactform" element={<ContactForm/>}/>
            <Route path="/storepage" element={<StorePage/>}/>
            <Route path="/seeds-products" element={<Seeds/>}/>
            <Route path="/fertilizers-products" element={<FertilizersProducts/>}/>
             <Route path="/shop" element={<Shop/>}/>
             <Route path="/LikedProducts" element={<LikedProducts/>}/> 
             <Route path="/fertilizerproducts" element={<ShopFertilizers/>}/> 
             <Route path="/blog" element={<Blog/>}/>
          </Routes>
          </>}
          />
          </Routes>
          </BrowserRouter>
        
        
      </div>
    
  );
}

function ConditionalFooter() {
  const location = useLocation();  
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null; 
  }

  return <Footer />;
}


export default App;
