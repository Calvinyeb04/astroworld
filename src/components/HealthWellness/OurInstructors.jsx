import React from "react";
import { Link } from "react-router-dom";
import './OurInstructors.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const instructors = [
    {
        id: 1,
        name: "Emily Caldwell",
        specialty: "Yoga and Mindfulness",
        description: "Emily specializes in restorative yoga and mindfulness practices. Her classes focus on stress reduction and inner balance.",
        imagePath: "/instructors/ave-calvar-opxOfzge2Tg-unsplash.jpg"
    },
    {
        id: 2,
        name: "Marcus Thompson",
        specialty: "High-Intensity Interval Training",
        description: "Marcus is an expert in HIIT workouts. He's known for his energetic classes that push clients to their limits while ensuring proper form.",
        imagePath: "/instructors/brian-lawson-tKQLAEFpVYw-unsplash.jpg"
    },
    {
        id: 3,
        name: "Alex Reeves",
        specialty: "Strength and Conditioning",
        description: "Alex combines traditional weightlifting with functional fitness. His approach helps clients build strength for everyday life.",
        imagePath: "/instructors/bruce-mars-ZXq7xoo98b0-unsplash.jpg"
    },
    {
        id: 4,
        name: "Sophia Chen",
        specialty: "Pilates and Core Training",
        description: "Sophia's Pilates classes focus on core strength, flexibility, and posture improvement. She works with clients of all fitness levels.",
        imagePath: "/instructors/erik-brolin-ZARfCYDaVg0-unsplash.jpg"
    }
];

const OurInstructors = () => {
    return (
        <div className="our-instructors">
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
                <div className="instructors-content">
                    <h1>Our Instructors</h1>
                    <p className="intro">Meet our team of expert instructors dedicated to helping you achieve your health and wellness goals.</p>
                    <div className="instructor-grid">
                        {instructors.map((instructor) => (
                            <div key={instructor.id} className="instructor-card">
                                <img src={instructor.imagePath} alt={instructor.name} className="instructor-image" />
                                <h2>{instructor.name}</h2>
                                <h3>{instructor.specialty}</h3>
                                <p>{instructor.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="why-join-us">
                        <h2>Why Join Us?</h2>
                        <ul>
                            <li>Expert instructors with diverse specialties</li>
                            <li>Personalized attention and guidance</li>
                            <li>State-of-the-art facilities and equipment</li>
                            <li>Flexible class schedules to fit your lifestyle</li>
                            <li>Supportive community of like-minded individuals</li>
                        </ul>
                        <Link to="/classes" className="join-us-button">Join Us Today</Link>
                    </div>
                    <div className="social-media">
                        <h3>Connect With Us</h3>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/" aria-label="Facebook"><FaFacebook /></a>
                            <a href="https://twitter.com/" aria-label="Twitter"><FaTwitter /></a>
                            <a href="http://www.instagram.com/" aria-label="Instagram"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/" aria-label="LinkedIn"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurInstructors;