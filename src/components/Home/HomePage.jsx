import "./Home.css";
import React, { useState } from "react";
import MoodSelector from "../Modals/MoodSelector";

function HomePage() {
  const [userMood, setUserMood] = useState("");
  const [displayMoodModal, setDisplayMoodModal] = useState(true);

  const handleMoodSelection = (mood) => {
    setUserMood(mood);
    // You can perform additional actions based on the selected mood
  };

  const handleCloseModal = () => {
    setDisplayMoodModal(false);
  };

  const handleMoodSubmit = () => {
    if (userMood !== "") {
      setDisplayMoodModal(false);
    }
  };

  return (
    <div className="app">
      <div className="home-page">
        <h1>Welcome!</h1>
        <h2>Time to focus on your mental health</h2>
        {displayMoodModal && <MoodSelector onSelect={handleMoodSelection} onSubmit={handleMoodSubmit} onClose={handleCloseModal} />}
      </div>
    </div>
  );
}

export default HomePage;
