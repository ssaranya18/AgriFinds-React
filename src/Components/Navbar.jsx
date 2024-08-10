import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo4.jpg';
const Navbar = () => {
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const handleMoreDropdownToggle = () => {
    setIsMoreDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="AgriFinds Logo" className="logo-image" />
        <Link to="/">AgriFinds..</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/crops">Crops</Link></li>
        <li><Link to="/agri">Experts</Link></li>
        <li><Link to="/fertilizer">Fertilizer</Link></li>
        <li><Link to="/schemes">Schemes</Link></li>
        <li><Link to="/login">Login</Link></li>
        {/* <li 
          className="dropdown" 
          onMouseEnter={handleMoreDropdownToggle}
          onMouseLeave={handleMoreDropdownToggle}
        >
          <span className="dropbtn">More</span>
          {isMoreDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/schemes">Schemes</Link>
              <Link to="/products">Products</Link>
            </div>
          )}
        </li> */}
  
       
        {/* <li><Link to="/register">
        <button className='registerbutton'>SignUp</button></Link></li> */}


      </ul>
    </nav>
  );
}

export default Navbar;
