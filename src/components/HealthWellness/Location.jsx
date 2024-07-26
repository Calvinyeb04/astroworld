import React from "react";
import { Link } from "react-router-dom";
import './Location.css';

const locations = [
  {
    id: 1,
    name: "Downtown Studio",
    image: "/Location/roberto-nickson-oQJO7TpRZj0-unsplash.jpg",
    address: "123 Main St, Downtown",
    phone: "(555) 123-4567",
    hours: "Mon-Fri: 6am-9pm, Sat-Sun: 8am-7pm"
  },
  {
    id: 2,
    name: "Beachside Retreat",
    image: "/Location/rima-kruciene-Tq9Ln3gpiG4-unsplash.jpg",
    address: "456 Ocean Ave, Beachfront",
    phone: "(555) 987-6543",
    hours: "Mon-Sun: 7am-8pm"
  },
  {
    id: 3,
    name: "Suburban Oasis",
    image: "/Location/usen-parmanov-JJi82Ayk_kQ-unsplash.jpg",
    address: "789 Green Lane, Suburbia",
    phone: "(555) 246-8135",
    hours: "Mon-Fri: 5am-10pm, Sat-Sun: 7am-8pm"
  },
  {
    id: 4,
    name: "City Center Gym",
    image: "/Location/bruce-mars-pFyKRmDiWEA-unsplash.jpg",
    address: "101 Fitness Blvd, City Center",
    phone: "(555) 369-2580",
    hours: "24/7"
  }
];

const Location = () => {
  const getDirections = (address) => {
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="Location">
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
        <div className="location-content">
          <h1>Our Locations</h1>
          <p>Find the perfect ASTRO studio near you and start your wellness journey today!</p>
          <div className="location-grid">
            {locations.map((location) => (
              <div key={location.id} className="location-card">
                <img src={location.image} alt={location.name} />
                <h2>{location.name}</h2>
                <p><strong>Address:</strong> {location.address}</p>
                <p><strong>Phone:</strong> {location.phone}</p>
                <p><strong>Hours:</strong> {location.hours}</p>
                <button 
                  className="direction-btn" 
                  onClick={() => getDirections(location.address)}
                >
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;