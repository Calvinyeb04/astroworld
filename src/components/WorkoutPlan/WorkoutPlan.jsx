import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaRunning, FaSwimmer, FaCheck, FaUndo, FaLeaf, FaUsers, FaUtensils, FaPlay } from "react-icons/fa";
import './WorkoutPlan.css';



const WorkoutPlan = () => {
    const [workouts, setWorkouts] = useState([
        { id: 1, name: "Chest Day", sets: 4, reps: 12, completed: false, icon: <FaDumbbell /> },
        { id: 2, name: "Cardio", sets: 1, reps: 30, completed: false, icon: <FaRunning /> },
        { id: 3, name: "Swimming", sets: 3, reps: 15, completed: false, icon: <FaSwimmer /> },
    ]);

    const [showAddForm, setShowAddForm] = useState(false);
    const [newWorkout, setNewWorkout] = useState({ name: "", sets: "", reps: "" });
    const [sustainabilityTip, setSustainabilityTip] = useState("");
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    useEffect(() => {
        // Simulating fetching a daily sustainability tip
        setSustainabilityTip("Use a reusable water bottle during your workouts to reduce plastic waste.");
    }, []);

    const toggleWorkoutCompletion = (id) => {
        setWorkouts(workouts.map(workout => 
            workout.id === id ? { ...workout, completed: !workout.completed } : workout
        ));
    };

    const addWorkout = (e) => {
        e.preventDefault();
        const workout = {
            id: workouts.length + 1,
            ...newWorkout,
            completed: false,
            icon: <FaDumbbell />
        };
        setWorkouts([...workouts, workout]);
        setNewWorkout({ name: "", sets: "", reps: "" });
        setShowAddForm(false);
    };

    const progress = (workouts.filter(w => w.completed).length / workouts.length) * 100;

    const predefinedWorkouts = [
        {
            id: 1,
            name: "Full Body HIIT",
            description: "High-intensity interval training for full body workout",
            equipment: ["Mat", "Dumbbells (optional)"],
            videoUrl: "https://www.youtube.com/embed/ml6cT4AZdqI"
        },
        {
            id: 2,
            name: "Yoga for Beginners",
            description: "Gentle yoga routine for flexibility and relaxation",
            equipment: ["Yoga mat"],
            videoUrl: "https://www.youtube.com/embed/v7AYKMP6rOE"
        },
        {
            id: 3,
            name: 'Planks',
            description: 'The plank is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time',
            equipment: ['None'],
            videoUrl: 'https://www.youtube.com/watch?v=pSHjTRCQxIw'

        


        }
        // Add more predefined workouts as needed
    ];

    return (
        <motion.div 
            className="workout-plan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Workout Plan</h1>
            
            <div className="sustainability-tip">
                <FaLeaf /> 
                <p>{sustainabilityTip}</p>
            </div>

            <div className="predefined-workouts">
                <h2>Featured Workouts</h2>
                <div className="workout-grid">
                    {predefinedWorkouts.map(workout => (
                        <motion.div 
                            key={workout.id}
                            className="workout-card"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            onClick={() => setSelectedWorkout(workout)}
                        >
                            <h3>{workout.name}</h3>
                            <p>{workout.description}</p>
                            <FaPlay className="play-icon" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedWorkout && (
                <motion.div 
                    className="workout-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="modal-content">
                        <h2>{selectedWorkout.name}</h2>
                        <p>{selectedWorkout.description}</p>
                        <h3>Equipment Needed:</h3>
                        <ul>
                            {selectedWorkout.equipment.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <div className="video-container">
                            <iframe
                                width="560"
                                height="315"
                                src={selectedWorkout.videoUrl}
                                title={selectedWorkout.name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <button onClick={() => setSelectedWorkout(null)}>Close</button>
                    </div>
                </motion.div>
            )}

            <div className="workout-overview">
                <h2>Your Progress</h2>
                <div className="progress-bar">
                    <motion.div 
                        className="progress" 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    ></motion.div>
                </div>
                <p>{Math.round(progress)}% Complete</p>
            </div>

            <div className="workout-list">
                <h2>This Week's Workouts</h2>
                {workouts.map(workout => (
                    <motion.div 
                        key={workout.id} 
                        className={`workout-item ${workout.completed ? 'completed' : ''}`}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="workout-icon">{workout.icon}</div>
                        <div className="workout-details">
                            <h3>{workout.name}</h3>
                            <p>{workout.sets} sets x {workout.reps} reps</p>
                        </div>
                        <button onClick={() => toggleWorkoutCompletion(workout.id)}>
                            {workout.completed ? <FaUndo /> : <FaCheck />}
                        </button>
                    </motion.div>
                ))}
            </div>

            <div className="workout-planner">
                <h2>Plan Your Workout</h2>
                {!showAddForm ? (
                    <button className="add-workout-btn" onClick={() => setShowAddForm(true)}>Add New Workout</button>
                ) : (
                    <motion.form 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        onSubmit={addWorkout}
                    >
                        <input 
                            type="text" 
                            placeholder="Workout Name" 
                            value={newWorkout.name}
                            onChange={(e) => setNewWorkout({...newWorkout, name: e.target.value})}
                            required 
                        />
                        <input 
                            type="number" 
                            placeholder="Number of Sets" 
                            value={newWorkout.sets}
                            onChange={(e) => setNewWorkout({...newWorkout, sets: e.target.value})}
                            required 
                        />
                        <input 
                            type="number" 
                            placeholder="Number of Reps" 
                            value={newWorkout.reps}
                            onChange={(e) => setNewWorkout({...newWorkout, reps: e.target.value})}
                            required 
                        />
                        <button type="submit">Add Workout</button>
                    </motion.form>
                )}
            </div>

            <div className="additional-features">
                <motion.div 
                    className="feature-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <FaUtensils />
                    <h3>Nutrition Guide</h3>
                    <p>Access personalized meal plans and recipes</p>
                </motion.div>
                <motion.div 
                    className="feature-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <FaUsers />
                    <h3>Community</h3>
                    <p>Join challenges and connect with other users</p>
                </motion.div>
            </div>

            <div className="image-placeholder">
                <div className="white-box">
                    <p>Workout Image Placeholder</p>
                </div>
            </div>
        </motion.div>
    );
}

export default WorkoutPlan;