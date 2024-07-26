import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <main>
        <section className="hero">
          <img src="/HomePagepics/HealthWellness.jpg" alt="Health and Wellness" />
          <div className="hero-content">
            <h1>Welcome to ASTRO Fitness</h1>
            <p>Nurture Your Mind, Body, and Soul</p>
            <Link to="/get-started" className="cta-button">Start Your Journey</Link>
          </div>
        </section>

        <section className="app-intro">
          <h2>Empower Your Wellness Journey</h2>
          <p>
            At ASTRO Fitness, we believe that wellness is a holistic journey embracing both body and mind. 
            Our mobile application is designed to be your ultimate companion on this path, offering you 
            customized workout plans, nutrition guidance, and progress tracking to help you achieve your health goals.
          </p>
        </section>

        <section className="features">
          <div className="feature">
            <img src="/HomePagepics/Gym.jpg" alt="Workout Plans" />
            <h3>Customized Workout Plans</h3>
            <p>Tailored fitness routines to meet your specific goals and fitness level.</p>
            <Link to="/workout-plan" className="feature-link">Explore Workouts</Link>
          </div>
          <div className="feature">
            <img src="/HomePagepics/Nutrition.jpg" alt="Nutrition Guides" />
            <h3>Personalized Nutrition Guides</h3>
            <p>Expert dietary recommendations, including eco-friendly and plant-based options.</p>
            <Link to="/nutrition" className="feature-link">Discover Nutrition</Link>
          </div>
          <div className="feature">
            <img src="/HomePagepics/Yoga.jpg" alt="Wellness Tracking" />
            <h3>Comprehensive Wellness Tracking</h3>
            <p>Monitor your progress, set goals, and celebrate your achievements.</p>
            <Link to="/health-wellness" className="feature-link">Track Your Wellness</Link>
          </div>
        </section>

        <section className="sustainability">
          <img src="/HomePagepics/Food.jpg" alt="Sustainable Living" />
          <div className="sustainability-content">
            <h2>Embracing Sustainability</h2>
            <p>
              We're committed to promoting eco-friendly practices. Our app provides tips on sustainable 
              living, encourages the use of reusable water bottles, and offers plant-based meal options 
              to reduce your carbon footprint.
            </p>
            <Link to="/nutrition" className="feature-link">Explore Sustainable Recipes</Link>
          </div>
        </section>

        <section className="community">
          <h2>Join Our Thriving Community</h2>
          <p>
            Connect with like-minded individuals, share your progress, and participate in 
            eco-friendly challenges. Our supportive community is here to motivate and inspire you 
            on your wellness journey.
          </p>
          <img src="/HomePagepics/Gym2.jpg" alt="Fitness Community" />
        </section>

        <section className="cta">
          <h2>Ready to Transform Your Life?</h2>
          <p>Download ASTRO Fitness now and take the first step towards a healthier, more sustainable you.</p>
          <Link to="/login" className="cta-button">Get Started Today</Link>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>
        <p>&copy; 2024 ASTRO Fitness. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;