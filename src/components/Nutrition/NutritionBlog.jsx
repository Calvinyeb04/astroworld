// NutritionBlog.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "./NutritionBlog.css";

const NutritionBlog = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const popupRef = useRef(null);

    const blogPosts = [
        {
            title: "The Power of Whole Foods",
            image: "/NutritionBlogpic/brooke-lark-jUPOXXRNdcA-unsplash (1).jpg",
            excerpt: "Discover how incorporating whole foods into your diet can transform your health and well-being.",
            fullContent: "Whole foods are unprocessed and unrefined, or processed and refined as little as possible before being consumed. They are packed with essential nutrients, fiber, and natural compounds that promote optimal health. By incorporating more whole foods into your diet, you can improve digestion, boost energy levels, and reduce the risk of chronic diseases. Some examples of whole foods include fruits, vegetables, whole grains, nuts, and seeds. Start by gradually replacing processed foods with whole food alternatives and experience the transformative power of natural nutrition.",
            date: "July 15, 2024",
            author: "Dr. Emma Nutrition"
        },
        {
            title: "Mindful Eating: A Path to Better Health",
            image: "/NutritionBlogpic/brooke-lark-nTZOILVZuOg-unsplash (1).jpg",
            excerpt: "Learn how practicing mindful eating can improve your relationship with food and boost overall health.",
            fullContent: "Mindful eating is the practice of paying full attention to the experience of eating and drinking, both inside and outside the body. It involves using all your senses to choose food that is both satisfying and nourishing to your body. By eating mindfully, you can develop a better relationship with food, improve digestion, and naturally regulate your appetite. Some tips for mindful eating include eating slowly, savoring each bite, and listening to your body's hunger and fullness cues. Start incorporating mindful eating practices into your daily routine and notice the positive changes in your overall well-being.",
            date: "July 10, 2024",
            author: "Sarah Mindful"
        },
        {
            title: "Superfoods: Myth or Magic?",
            image: "/NutritionBlogpic/dan-gold-4_jhDO54BYg-unsplash.jpg",
            excerpt: "We dive deep into the world of superfoods to separate fact from fiction and help you make informed choices.",
            fullContent: "The term 'superfood' has gained popularity in recent years, but what does it really mean? While there's no scientific definition for superfoods, they are generally considered to be nutrient-dense foods that offer exceptional health benefits. Some commonly touted superfoods include blueberries, kale, salmon, and quinoa. While these foods are indeed nutritious, it's important to remember that no single food can provide all the nutrients your body needs. A balanced diet with a variety of whole foods is key to optimal health. Instead of focusing on individual superfoods, aim to incorporate a rainbow of fruits and vegetables into your diet to ensure you're getting a wide range of nutrients.",
            date: "July 5, 2024",
            author: "Dr. Alex Superfood"
        },
        {
            title: "Meal Prep 101: Eat Healthy on a Busy Schedule",
            image: "/NutritionBlogpic/element5-digital-acrBf9BlfvE-unsplash.jpg",
            excerpt: "Discover time-saving meal prep techniques that will help you maintain a nutritious diet even with a hectic lifestyle.",
            fullContent: "Meal prepping is a game-changer for maintaining a healthy diet while managing a busy schedule. By dedicating a few hours each week to planning and preparing meals in advance, you can save time, reduce stress, and avoid unhealthy food choices. Some effective meal prep strategies include batch cooking, preparing versatile ingredients that can be used in multiple dishes, and investing in quality food storage containers. Start small by prepping just a few meals or snacks each week, and gradually increase as you become more comfortable with the process. With consistent meal prepping, you'll find it easier to stick to your nutrition goals and enjoy homemade, nutritious meals throughout the week.",
            date: "June 30, 2024",
            author: "Chef Maria Prep"
        }
    ];

    const handleReadMore = (post) => {
        setSelectedPost(post);
    };

    const closePopup = () => {
        setSelectedPost(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                closePopup();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="nutrition-blog">
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

            <header className="blog-header">
                <div className="header-content">
                    <h1>Nutrition Blog</h1>
                    <p>Nourishing Insights for a Healthier You</p>
                </div>
            </header>

            <main className="blog-content">
                <section className="featured-post">
                    <img src={blogPosts[0].image} alt={blogPosts[0].title} />
                    <div className="featured-post-content">
                        <h2>{blogPosts[0].title}</h2>
                        <p>{blogPosts[0].excerpt}</p>
                        <div className="post-meta">
                            <span>{blogPosts[0].date}</span>
                            <span>{blogPosts[0].author}</span>
                        </div>
                        <button className="read-more" onClick={() => handleReadMore(blogPosts[0])}>Read More</button>
                    </div>
                </section>

                <section className="recent-posts">
                    <h2>Recent Posts</h2>
                    <div className="post-grid">
                        {blogPosts.slice(1).map((post, index) => (
                            <div key={index} className="post-card">
                                <img src={post.image} alt={post.title} />
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <div className="post-meta">
                                    <span>{post.date}</span>
                                    <span>{post.author}</span>
                                </div>
                                <button className="read-more" onClick={() => handleReadMore(post)}>Read More</button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-content">
                    <h3>Subscribe to Our Newsletter</h3>
                    <p>Get the latest nutrition tips and recipes delivered to your inbox!</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </footer>

            {selectedPost && (
                <div className="post-popup" onClick={closePopup}>
                    <div className="post-popup-content" ref={popupRef} onClick={(e) => e.stopPropagation()}>
                        <button className="close-popup" onClick={closePopup}>&times;</button>
                        <h2>{selectedPost.title}</h2>
                        <img src={selectedPost.image} alt={selectedPost.title} />
                        <p>{selectedPost.fullContent}</p>
                        <div className="post-meta">
                            <span>{selectedPost.date}</span>
                            <span>{selectedPost.author}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NutritionBlog;