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
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center text-cyan-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
          <h2 className="text-xl">Time to focus on your mental health</h2>
          {displayMoodModal && <MoodSelector onSelect={handleMoodSelection} onSubmit={handleMoodSubmit} onClose={handleCloseModal} />}
        </div>
      </div>
      <div className="bg-white p-4 w-full">
        <div className="flex justify-around items-center">
          <button className="text-white py-2 px-4 bg-blue-500 rounded-md">Tab 1</button>
          <button className="text-white py-2 px-4 bg-blue-500 rounded-md">Tab 2</button>
          <button className="text-white py-2 px-4 bg-blue-500 rounded-md">Tab 3</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
