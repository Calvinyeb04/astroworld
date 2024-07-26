import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Blog.css';

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of High-Intensity Interval Training",
      excerpt: "Discover how HIIT can transform your fitness routine and boost your metabolism.",
      content: "High-Intensity Interval Training (HIIT) has gained popularity for its efficiency and effectiveness. This workout method alternates between short bursts of intense exercise and periods of rest or lower-intensity activity. HIIT can help you burn more calories, improve cardiovascular health, and increase your metabolic rate. It's also time-efficient, making it perfect for busy schedules. Learn how to incorporate HIIT into your routine and experience the benefits firsthand.",
      image: "/Blog/vitalii-pavlyshynets-kcRFW-Hje8Y-unsplash.jpg",
      author: "Marcus Thompson",
      date: "July 20, 2024"
    },
    {
      id: 2,
      title: "Mindfulness Meditation: A Path to Inner Peace",
      excerpt: "Learn how mindfulness can reduce stress and improve your overall well-being.",
      content: "Mindfulness meditation is a powerful tool for managing stress and improving mental health. By focusing on the present moment and accepting thoughts and feelings without judgment, you can cultivate a sense of inner peace and emotional balance. Regular practice can lead to reduced anxiety, improved focus, and better sleep quality. Discover simple techniques to incorporate mindfulness into your daily life and experience its transformative effects.",
      image: "/Blog/madison-lavern-4gcqRf3-f2I-unsplash.jpg",
      author: "Emily Caldwell",
      date: "July 18, 2024"
    },
    {
      id: 3,
      title: "Nutrition Tips for Optimal Performance",
      excerpt: "Fuel your body right with these expert nutrition tips for better workouts and recovery.",
      content: "Proper nutrition is crucial for achieving your fitness goals and maintaining overall health. Learn about the importance of macronutrients, the timing of meals around workouts, and how to create a balanced diet that supports your active lifestyle. We'll cover pre- and post-workout nutrition, hydration strategies, and how to tailor your diet to your specific fitness goals. With the right nutritional approach, you can enhance your performance, speed up recovery, and see better results from your workouts.",
      image: "/Blog/jon-flobrant-sbjVthVW2X8-unsplash.jpg",
      author: "Sophia Chen",
      date: "July 15, 2024"
    },
    {
      id: 4,
      title: "The Importance of Rest and Recovery in Your Fitness Journey",
      excerpt: "Understand why rest days are crucial for your progress and how to optimize your recovery.",
      content: "While consistent exercise is important, rest and recovery play an equally vital role in your fitness journey. Proper recovery allows your body to repair and strengthen itself between workouts, reducing the risk of injury and burnout. Learn about active recovery techniques, the benefits of quality sleep, and how to structure your workout routine to include adequate rest periods. By prioritizing recovery, you'll see improved performance, faster progress, and better overall results in your fitness goals.",
      image: "/Blog/dane-wetton-zdLdgGbi9Ow-unsplash.jpg",
      author: "Alex Reeves",
      date: "July 12, 2024"
    },
    {
      id: 5,
      title: "Yoga for Flexibility and Stress Relief",
      excerpt: "Explore the many benefits of yoga and how it can improve your physical and mental well-being.",
      content: "Yoga is a holistic practice that combines physical postures, breathing exercises, and meditation to promote flexibility, strength, and inner peace. Regular yoga practice can improve your posture, reduce chronic pain, and increase your overall flexibility. Beyond the physical benefits, yoga is an excellent tool for stress management and mental clarity. Discover different yoga styles, basic poses for beginners, and how to incorporate yoga into your daily routine for a more balanced and centered life.",
      image: "/Blog/meghan-holmes-buWcS7G1_28-unsplash.jpg",
      author: "Olivia Martinez",
      date: "July 10, 2024"
    },
    {
      id: 6,
      title: "Outdoor Workouts: Embracing Nature for Fitness",
      excerpt: "Take your workouts outside and reap the benefits of exercising in nature.",
      content: "Outdoor workouts offer a refreshing change of scenery and numerous health benefits. Exercising in nature can boost your mood, increase vitamin D levels, and provide a more challenging and varied workout environment. From hiking and trail running to outdoor yoga and bodyweight exercises in the park, there are countless ways to incorporate nature into your fitness routine. Learn how to plan safe and effective outdoor workouts, what equipment to bring, and how to adapt your favorite exercises to an outdoor setting. Discover the joy of connecting with nature while pursuing your fitness goals.",
      image: "/Blog/roberto-nickson-YCW4BEhKluw-unsplash.jpg",
      author: "David Lee",
      date: "July 8, 2024"
    }
  ];

  const toggleExpand = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div className="Blog">
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
        <div className="blog-container">
          <h1>ASTRO's Blog</h1>
          <p className="blog-intro">Stay up to date with the latest wellness tips, workout advice, and ASTRO news.</p>
          
          <div className="blog-grid">
            {blogPosts.map(post => (
              <div key={post.id} className="blog-card">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-content">
                  <h2>{post.title}</h2>
                  <p>{expandedPost === post.id ? post.content : post.excerpt}</p>
                  <p className="blog-meta">By {post.author} | {post.date}</p>
                  <button onClick={() => toggleExpand(post.id)} className="read-more">
                    {expandedPost === post.id ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;