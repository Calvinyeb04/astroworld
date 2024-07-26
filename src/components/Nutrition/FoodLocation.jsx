import React from 'react';
import { Link } from 'react-router-dom';
import './FoodLocation.css';

const FoodLocation = () => {
    const locations = [
        {
            name: "Downtown Culinary Center",
            address: "123 Main St, Cityville, ST 12345",
            image: "/cookinglocation/Culinaryclass1.webp",
            description: "Our flagship location featuring state-of-the-art kitchens and classrooms."
        },
        {
            name: "Riverside Cooking School",
            address: "456 River Rd, Townsburg, ST 67890",
            image: "/cookinglocation/louis-hansel-dH9zt0QuQL0-unsplash.jpg",
            description: "A picturesque setting for our farm-to-table and outdoor cooking classes."
        },
        {
            name: "Uptown Gourmet Institute",
            address: "789 High St, Metropolis, ST 54321",
            image: "/cookinglocation/louis-hansel-h_s7AUBPss8-unsplash.jpg",
            description: "Specializing in fine dining techniques and international cuisines."
        },
        {
            name: "Suburban Cooking Workshop",
            address: "321 Oak Ln, Suburbville, ST 98765",
            image: "/cookinglocation/sarabjeet-singh-cyUO1YCAj0k-unsplash.jpg",
            description: "A cozy, home-like setting for our family-oriented cooking classes."
        }
    ];

    return (
        <div className="food-location">
            <nav className="NavBar">
                <div className="logo">Astro's kitchen</div>
                <ul>
                    <li><Link to="/Nutrition">Home</Link></li>
                    <li><Link to="/Menu">Recipes</Link></li>
                    <li><Link to="/ClassesFood">Classes</Link></li>
                    <li><Link to="/Location">Location</Link></li>
                    <li><Link to="/NutritionBlog">Blog</Link></li>
                </ul>
            </nav>

            <header className="centered-header">
                <div className="header-content">
                    <h1>Our Locations</h1>
                    <p>Find a cooking class near you</p>
                </div>
            </header>

            <main>
                <div className="location-grid">
                    {locations.map((location, index) => (
                        <div key={index} className="location-card">
                            <img src={location.image} alt={location.name} />
                            <h2>{location.name}</h2>
                            <p>{location.description}</p>
                            <p>{location.address}</p>
                            <button onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`, '_blank')}>
                                View on Google Maps
                            </button>
                        </div>
                    ))}
                </div>

                <div className="additional-info">
                    <h3>About Our Locations</h3>
                    <p>Each of our locations offers a unique culinary experience tailored to its surroundings. From urban kitchens to riverside cooking schools, we provide diverse environments for you to explore your passion for cooking.</p>
                    <p>All our facilities are equipped with professional-grade equipment and staffed by experienced chefs who are passionate about teaching.</p>
                </div>
            </main>

            <footer>
                <div className="social-links">
                    <h3>Follow Us</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
            </footer>
        </div>
    );
};

export default FoodLocation;