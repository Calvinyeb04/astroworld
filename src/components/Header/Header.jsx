import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/AstroWorld-Logo.png';

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <ul className="header-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/health-wellness">Health & Wellness</Link></li>
        <li><Link to="/workout-plan">Workout-Plan</Link></li>
        <li><Link to="/nutrition">Nutrition</Link></li> {/* Corrected path */}
        <li><Link to="/get-started">Login/Create</Link></li> {/* Corrected path */}
        


        
      </ul>
    </div>
  );
};

export default Header;
