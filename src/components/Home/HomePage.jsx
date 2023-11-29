import React, { useState } from "react";
import MoodSelector from "./MoodSelector";

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
    <div className="flex items-center text-cyan-900">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
        <h2 className="text-xl">Time to focus on your mental health</h2>
        {displayMoodModal && <MoodSelector onSelect={handleMoodSelection} onSubmit={handleMoodSubmit} onClose={handleCloseModal} />}
      </div>
    </div>
  );
}

export default HomePage;
