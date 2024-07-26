import React from "react";
import { Link } from "react-router-dom";
import "./HealthWellness.css";
import YOGA from "../../assets/YOGA.jpg";
import Aerobics from "../../assets/healthWellnesspics/Aerobics.jpg";
import imageasset from "../../assets/healthWellnesspics/image-asset.jpeg";

const HealthWellness = () => {
  return (
    <section className="health-wellness" style={{ backgroundImage: `url(${YOGA})` }}>
      <div className="content-wrapper">
        <div className="NavBar">
          <div className="logo">ASTRO</div>
          <ul>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Ourinstructors">Our instructors</Link></li>
            <li><Link to="/Classes">Classes</Link></li>
            <li><Link to="/Location">Location</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li className="STAR"><Link to="/Classes">Book a Class</Link></li>
          </ul>
        </div>
        <div className="content">
          <h1 className="HEADER_MAIN">Nurture Your Mind, Body, and Soul</h1>
          <div className="content-text">
            <p className="p1">
              Welcome to our haven of wellness, where we are dedicated to helping you
              achieve balance and vitality. At our studio, you'll find a range of classes 
              and resources designed to support your physical fitness, mental clarity, and overall well-being.
            </p>
            <p className="p2">
              Explore our diverse course offerings and get to know our welcoming community by signing 
              up for a complimentary drop-in class. It's the perfect opportunity to experience firsthand 
              the benefits of our personalized wellness programs and discover how we can help 
              you reach your health goals.
            </p>
            <p className="p3">
              Join us today and start your journey to a healthier, more fulfilled you. 
              Book a Class now and take the first step towards enhancing your wellness.
            </p>
          </div>
          <Link to="/Classes" className="cta-button">Start Your Journey</Link>
          </div>
        <div className="bottom-content">
          <div className="bottom-left">
            <div className="image-text-row">
              
              
            </div>
          </div>
          
        </div>
        <div className="MoreInfo">
          <h2 className="MoreIFHEADER">Empower Your Wellness Journey</h2>
          <p className="MOREIFHCONTENT">
          At our core, we believe that wellness is a holistic journey that
           embraces both body and mind. Our mobile application is designed to be your 
           ultimate companion on this path, offering you customized workout plans, nutrition guidance, 
           and progress tracking to help you achieve your health goals. By integrating sustainability tips
            and fostering a supportive community, we aim to enhance your well-being while promoting eco-friendly 
            practices. Dive into our features today and experience how our innovative approach can elevate your
           fitness routine and overall lifestyle.
          </p>

        </div>
        <div className="newsletter-subscription">
          <p>Subscribe to Our Newsletter</p>
          <p>Sign up to receive news and updates.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Sign Up</button>
        </div>
      </div>
    </section>
  );
}

export default HealthWellness;