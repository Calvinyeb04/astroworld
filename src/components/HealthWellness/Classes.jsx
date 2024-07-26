import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Classes.css';

const classes = [
  { 
    id: 1, 
    name: "Vinyasa Flow Yoga", 
    image: "/Classes/Yoga.jpg", 
    description: "Dynamic yoga sequence linking breath with movement. Suitable for all levels.", 
    duration: "60 minutes",
    price: "$15",
    schedule: "Mon, Wed, Fri 8:00 AM & 6:00 PM"
  },
  { 
    id: 2, 
    name: "Mindfulness Meditation", 
    image: "/Classes/meditation.jpg", 
    description: "Guided session to reduce stress and increase mental clarity. Perfect for beginners.", 
    duration: "45 minutes",
    price: "$10",
    schedule: "Tue, Thu 7:00 AM & 7:00 PM"
  },
  { 
    id: 3, 
    name: "Healthy Cooking Workshop", 
    image: "/Classes/Cooking.jpg", 
    description: "Learn to prepare nutritious meals with our expert chef. Ingredients included.", 
    duration: "90 minutes",
    price: "$35",
    schedule: "Saturdays 11:00 AM"
  },
  { 
    id: 4, 
    name: "Aromatherapy Massage", 
    image: "/Classes/Spa.jpg", 
    description: "Relaxing massage using essential oils to promote wellness and stress relief.", 
    duration: "60 minutes",
    price: "$65",
    schedule: "Daily 10:00 AM - 8:00 PM"
  },
  { 
    id: 5, 
    name: "Weekend Wellness Retreat", 
    image: "/Classes/Wellnessretreat.avif", 
    description: "Immersive two-day experience including yoga, meditation, and healthy meals.", 
    duration: "2 days",
    price: "$199",
    schedule: "Last weekend of each month"
  },
  { 
    id: 6, 
    name: "HIIT Fitness Class", 
    image: "/Classes/cathy-pham-FLQh5dkd4zk-unsplash.jpg", 
    description: "High-intensity interval training to boost metabolism and improve cardiovascular health.", 
    duration: "45 minutes",
    price: "$18",
    schedule: "Mon, Wed, Fri 7:00 AM & 5:30 PM"
  }
];

const Classes = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <div className="Classes">
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
        <div className="classes-content">
          <h1>Our Classes</h1>
          <p>Explore our diverse offerings and embark on your wellness journey today!</p>
          <div className="class-grid">
            {classes.map((cls) => (
              <div key={cls.id} className="class-card" onClick={() => setSelectedClass(cls)}>
                <img src={cls.image} alt={cls.name} />
                <h2>{cls.name}</h2>
                <p>{cls.description}</p>
                <div className="class-details">
                  <span><strong>Duration:</strong> {cls.duration}</span>
                  <span><strong>Price:</strong> {cls.price}</span>
                </div>
                <p><strong>Schedule:</strong> {cls.schedule}</p>
              </div>
            ))}
          </div>
          {selectedClass && (
            <div className="booking-form">
              <h2>Book {selectedClass.name}</h2>
              <p><strong>Price:</strong> {selectedClass.price}</p>
              <p><strong>Duration:</strong> {selectedClass.duration}</p>
              <p><strong>Schedule:</strong> {selectedClass.schedule}</p>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Your Phone Number" required />
                <input type="date" required />
                <select required>
                  <option value="">Select a time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
                <textarea placeholder="Any special requests or notes?" rows="3"></textarea>
                <button type="submit">Book Now</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Classes;