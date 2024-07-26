import React from "react";
import { Link } from "react-router-dom";
import './About.css';

const About = () => {
    return (
        <div className="About">
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
                <div className="about-content">
                    <h1>About ASTRO</h1>
                    <div className="about-grid">
                        <div className="about-text">
                            <p>Welcome to ASTRO, your sanctuary for holistic wellness in the heart of the city. Since our founding in 2015, we've been dedicated to helping individuals achieve balance, strength, and inner peace through mindful movement and supportive community.</p>
                            <p>At ASTRO, we believe that wellness is a journey, not a destination. Our diverse range of classes and programs are designed to meet you wherever you are on your path to health and self-discovery.</p>
                        </div>
                        <div className="about-images">
                            <img src="/About/jenny-hill-mQVWb7kUoOE-unsplash.jpg" alt="Yoga pose" />
                            <img src="/About/luke-chesser-rCOWMC8qf8A-unsplash.jpg" alt="Studio equipment" />
                            <img src="/About/toa-heftiba-B5Thyv8d3mo-unsplash.jpg" alt="Meditation session" />
                        </div>
                    </div>

                    <div className="mission-statement">
                        <h2>Our Mission</h2>
                        <p>To inspire and empower individuals to achieve optimal health and well-being through mindful movement, supportive community, and holistic practices.</p>
                    </div>

                    <div className="our-approach">
                        <h2>Our Approach</h2>
                        <p>At ASTRO, we blend ancient wisdom with modern science to create a comprehensive wellness experience. Our classes include:</p>
                        <ul>
                            <li>Yoga (Hatha, Vinyasa, Restorative)</li>
                            <li>Pilates</li>
                            <li>Meditation and Mindfulness</li>
                            <li>Functional Fitness</li>
                            <li>Nutrition Workshops</li>
                        </ul>
                        <p>Whether you're a beginner or an experienced practitioner, our expert instructors are here to guide and support you every step of the way.</p>
                    </div>

                    <div className="our-space">
                        <h2>Our Space</h2>
                        <p>ASTRO is more than just a studio – it's a community hub designed to nurture your body, mind, and spirit. Our facilities include:</p>
                        <ul>
                            <li>Three spacious, light-filled practice rooms</li>
                            <li>State-of-the-art equipment for all our classes</li>
                            <li>Comfortable changing rooms and showers</li>
                            <li>A welcoming lounge area for pre and post-class relaxation</li>
                            <li>An eco-friendly juice bar offering nutritious refreshments</li>
                        </ul>
                    </div>

                    <div className="community-impact">
                        <h2>Community Impact</h2>
                        <p>At ASTRO, we believe in giving back. We regularly host charity events, offer free community classes, and partner with local organizations to promote wellness for all. Our commitment to sustainability is reflected in our eco-friendly practices and partnerships with local, organic suppliers.</p>
                    </div>

                    <div className="join-us">
                        <h2>Join the ASTRO Family</h2>
                        <p>Whether you're looking to increase flexibility, build strength, reduce stress, or simply find a supportive community, ASTRO is here for you. We invite you to join us on this journey of self-discovery and wellness.</p>
                        <Link to="/classes" className="cta-button">Start Your Journey Today</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;