import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './classesFood.css';

const ClassesFood = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const classes = [
    {
      title: "Bangkok Culture Cooking",
      image: "/Food/Classes/allphoto-bangkok-CUlturecooking.jpg",
      description: "Immerse yourself in Thai cuisine and culture with our Bangkok cooking class.",
      duration: "3 hours",
      price: "$75"
    },
    {
      title: "Chef Store Masterclass",
      image: "/Food/Classes/alva-pratt-chefstore.jpg",
      description: "Learn from professional chefs and stock up on quality kitchen equipment.",
      duration: "4 hours",
      price: "$100"
    },
    {
      title: "Baking Essentials",
      image: "/Food/Classes/Bakingzero-take-ayk9eTUk8K4-unsplash.jpg",
      description: "Master the art of baking with our comprehensive baking essentials course.",
      duration: "3 hours",
      price: "$60"
    },
    {
      title: "Personal Chef Experience",
      image: "/Food/Classes/emediong-umoh-chef.jpg",
      description: "Enjoy a personalized cooking session with your own private chef.",
      duration: "2 hours",
      price: "$150"
    },
    {
      title: "Italian Cuisine Workshop",
      image: "/Food/Classes/fabrizio-magoni-chef.jpg",
      description: "Master the art of Italian cooking with our expert-led workshop.",
      duration: "4 hours",
      price: "$90"
    },
    {
      title: "Vegan MasterChef Academy",
      image: "/Food/Classes/Veganodiseo-castrejon-MasterChefAcademy.jpg",
      description: "Join our intensive program to elevate your vegan culinary skills to professional levels.",
      duration: "6 hours",
      price: "$120"
    }
  ];

  const handleRegister = (classItem) => {
    setSelectedClass(classItem);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setRegistrationComplete(true);
  };

  return (
    <div className="classes-food">
      <nav className="NavBar">
        <div className="logo">Astro's kitchen</div>
        <ul>
          <li><Link to="/Nutrition">Home</Link></li>
          <li><Link to="/Menu">Recipes</Link></li>
          <li><Link to="/ClassesFood">Classes</Link></li>
          <li><Link to="/FoodLocation">Location</Link></li>
          <li><Link to="/NutritionBlog">Blog</Link></li>
        </ul>
      </nav>

      <header>
        <h1>Culinary Classes</h1>
        <p>Expand your culinary horizons with our diverse range of cooking classes</p>
      </header>

      <main className="class-grid">
        {classes.map((classItem, index) => (
          <div key={index} className="class-card">
            <img src={classItem.image} alt={classItem.title} />
            <h2>{classItem.title}</h2>
            <p>{classItem.description}</p>
            <p>Duration: {classItem.duration}</p>
            <p>Price: {classItem.price}</p>
            <button onClick={() => handleRegister(classItem)}>Register Now</button>
          </div>
        ))}
      </main>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Register for {selectedClass.title}</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <button type="submit">Complete Registration</button>
            </form>
          </div>
        </div>
      )}

      {registrationComplete && (
        <div className="modal">
          <div className="modal-content">
            <h2>Congratulations!</h2>
            <p>You have successfully registered for {selectedClass.title}.</p>
            <p>We look forward to seeing you in class!</p>
            <button onClick={() => setRegistrationComplete(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassesFood;