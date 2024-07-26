import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    { name: "Avocado Toast", time: "10 mins", rating: 5, reviews: 9, image: "HealthyBreakfast/AvocadoToast.jpg", description: "Simple and nutritious avocado toast." },
    { name: "Greek Yogurt Parfaits", time: "15 mins", rating: 4, reviews: 5, image: "HealthyBreakfast/Greek YogurtParfaits.jpg", description: "Creamy Greek yogurt layered with fruits and granola." },
    { name: "Smoothie Bowls", time: "15 mins", rating: 4, reviews: 6, image: "HealthyBreakfast/SmoothieBowls.jpg", description: "Colorful and healthy smoothie bowls." },
    { name: "Grilled Chicken Breast", time: "25 mins", rating: 5, reviews: 8, image: "LeanProteins/GrilledChickenBreast.jpg", description: "Perfectly grilled chicken breast." },
    { name: "Baked Salmon with Lemon", time: "30 mins", rating: 5, reviews: 7, image: "LeanProteins/BakedSalmonwithLemon.jpg", description: "Delicious baked salmon with a zesty lemon flavor." },
    { name: "Tofu Stir Fry", time: "20 mins", rating: 4, reviews: 6, image: "LeanProteins/TofuStirFry.jpg", description: "Healthy and flavorful tofu stir fry with vegetables." },
    { name: "Kale and Berry Salad", time: "15 mins", rating: 4, reviews: 5, image: "NutrientPackedSalads/KaleandBerrySalad.jpg", description: "Nutrient-rich salad with kale and fresh berries." },
    { name: "Mediterranean Greek Salad", time: "20 mins", rating: 5, reviews: 7, image: "NutrientPackedSalads/Mediterranean Greek Salad.jpg", description: "Classic Mediterranean salad with feta and olives." },
  ];

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closePopup = () => {
    setSelectedRecipe(null);
  };

  return (
    <section className="Recipes">
      <div className="content-wrapper2">
        <div className="NavBar2">
          <div className="logo">Astro's kitchen</div>
          <ul>
            <li><Link to="/Nutrition">Home</Link></li>
            <li><Link to="/Menu">Recipes</Link></li>
            <li><Link to="/ClassesFood">Classes</Link></li>
            <li><Link to="/Location">Location</Link></li>
            <li><Link to="/NutritionBlog">Blog</Link></li>
          </ul>
        </div>
      </div>
      <div className="menu-content">
        <div className="sidebar">
          <div className="profile">
            <h3>Calvin Yeboah</h3>
            <p>Master Chef</p>
          </div>
          <nav>
            <ul>
              <li className="active">Recipes</li>
              <li>Favorites</li>
              <li>Courses</li>
              <li>Community</li>
            </ul>
          </nav>
        </div>
        <div className="main-content">
          <header>
            <div className="search-bar">
              <input type="text" placeholder="Search recipes..." />
            </div>
            <div className="user-actions">
              <span className="user-icon">👤</span>
              <button className="premium-btn">Premium →</button>
            </div>
          </header>
          <h1>Learn, Cook, & Eat your food</h1>
          <div className="stats">
            <span>120 Videos</span>
            <span>201 Recipes</span>
          </div>
          <div className="categories">
            <button className="active">All</button>
            <button>Breakfast</button>
            <button>Salads</button>
            <button>Proteins</button>
            <button>Snacks</button>
          </div>
          <div className="recipes-grid">
            {recipes.map((recipe, index) => (
              <div className="recipe-card" key={index} onClick={() => handleRecipeClick(recipe)}>
                <img src={`${process.env.PUBLIC_URL}/Food/${recipe.image}`} alt={recipe.name} />
                <h3>{recipe.name}</h3>
                <div className="recipe-info">
                  <span>⭐️ {recipe.rating} ({recipe.reviews} Reviews)</span>
                  <span>{recipe.time}</span>
                </div>
                <button className="view-recipe-btn">View Recipe</button>
              </div>
            ))}
          </div>
          <div className="featured-recipe">
            <img src={`${process.env.PUBLIC_URL}/Food/PostWorkoukMeals/GrilledChickenwithSweetPotato.jpg`} alt="Grilled Chicken with Sweet Potato" />
            <div className="featured-recipe-info">
              <h2>Grilled Chicken with Sweet Potato</h2>
              <p>A perfect post-workout meal combining lean protein and complex carbohydrates to refuel your body after exercise.</p>
              <span>Serving: 4</span>
              <span>Cook Time: 40 min</span>
              <button className="get-offer-btn">Get The Recipe →</button>
            </div>
          </div>
        </div>
      </div>
      {selectedRecipe && (
        <div className="recipe-popup">
          <div className="recipe-popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h2>{selectedRecipe.name}</h2>
            <img src={`${process.env.PUBLIC_URL}/Food/${selectedRecipe.image}`} alt={selectedRecipe.name} />
            <p>{selectedRecipe.description}</p>
            <p>Cooking Time: {selectedRecipe.time}</p>
            <p>Rating: {selectedRecipe.rating} stars ({selectedRecipe.reviews} reviews)</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Menu;