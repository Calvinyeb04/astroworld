import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import HealthWellness from './components/HealthWellness/HealthWellness';
import GetStarted from "./components/GetStarted/GetStarted";
import WorkoutPlan from "./components/WorkoutPlan/WorkoutPlan";
import Nutrition from "./components/Nutrition/Nutrition";
import Menu from "./components/Menu/Menu";
import OurInstructors from "./components/HealthWellness/OurInstructors";
import About from "./components/HealthWellness/About";
import Classes from "./components/HealthWellness/Classes";
import Location from "./components/HealthWellness/Location";
import Blog from "./components/HealthWellness/Blog";
import ClassesFood from "./components/Nutrition/classesFood";
import FoodLocation from "./components/Nutrition/FoodLocation";
import NutritionBlog from "./components/Nutrition/NutritionBlog";

// ... other code ...

// Import your CSS files here
import './App.css';
import './components/Header/Header.css';
import './components/Hero/Hero.css';
import './components/HealthWellness/HealthWellness.css';
import './components/GetStarted/GetStarted.css';
import './components/WorkoutPlan/WorkoutPlan.css';
import './components/Nutrition/Nutrition.css';
import './components/Menu/Menu.css';
import './components/HealthWellness/OurInstructors.css';
import './components/HealthWellness/About.css';
import './components/HealthWellness/Classes.css';
import './components/HealthWellness/Location.css';
import './components/HealthWellness/Blog.css';
import './components/Nutrition/classesFood.css';
import './components/Nutrition/classesFood.jsx';
import './components/Nutrition/FoodLocation.css';
import './components/Nutrition/NutritionBlog.css';

// Layout component that includes the Header and Outlet
const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

// Home component
const Home = () => (
  <div>
    <Hero />
    
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/get-started",
        element: <GetStarted />,
      },
      {
        path: "/health-wellness",
        element: <HealthWellness />,
      },
      {
        path: "/workout-plan",
        element: <WorkoutPlan />,
      },
      {
        path: "/Nutrition",
        element: <Nutrition />,
      },
      {
        path: "/Menu",
        element: <Menu />,
      },
      {
        path: "/OurInstructors",
        element: <OurInstructors />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Classes",
        element: <Classes />,
      },
      {
        path: "/Location",
        element: <Location />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/ClassesFood",
        element: <ClassesFood />,
      },
      {
        path: "/FoodLocation",
        element: <FoodLocation />,
      },
      {
        path: "/NutritionBlog",
        element: <NutritionBlog />,
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;