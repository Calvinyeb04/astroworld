import React from 'react';
import { Link } from 'react-router-dom';
import './Nutrition.css';
import Main from '../../assets/Nutrition/Main.avif';
import COOK from '../../assets/Nutrition/COOK.png';
import DELIVER from '../../assets/Nutrition/MEALS.png';
import ENJOY from '../../assets/Nutrition/DELIVERY.png';

const Nutrition = () => {
  return (
    <>
      <section className="nutrition" style={{ backgroundImage: `url(${Main})` }}>
        <div className="content-wrapper">
          <div className="NavBar">
            <div className="logo">Astro's kitchen</div>
            <ul>
              <li><Link to="/Nutrition">Home</Link></li>
              <li><Link to="/Menu">Recipes</Link></li>
              <li><Link to="/ClassesFood">Classes</Link></li>
              <li><Link to="/FoodLocation">Location</Link></li>
              <li><Link to="/NutritionBlog">Blog</Link></li>
            </ul>
          </div>
          <div className="header-content">
            <h1>A Chef in Every<br />Delicious Meal Box</h1>
          </div>
          <div className="paragraph">
            <h3>Receive pre-portioned ingredients from Astro's Meal Kits and enjoy our<br />
            best recipes delivered directly to your doorstep! Experience the<br />
            convenience and delight of cooking gourmet meals at home.</h3>
          </div>
          <div className="button-container">
            <button className="button">Select Program</button>
            <Link to="/Menu" className="button transparent">View Menu</Link>
          </div>
        </div>
      </section>
      <section className="lower-half">
        <div className="lower-half-content">
          <h2 className="header">Explore Our Services</h2>
          <p className="paragraph">Discover a variety of meal plans tailored to your dietary needs. From vegan and vegetarian options to protein-packed meals, we have something for everyone. Join our community of food enthusiasts and start your culinary adventure today!</p>
          <div className="image-container">
            <img src={COOK} alt="Cook" className="image" />
            <img src={DELIVER} alt="Deliver" className="image middle" />
            <img src={ENJOY} alt="Enjoy" className="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Nutrition;