import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
import MoodSelector from "../Home/MoodSelector";
import Navbar from "./Navbar";
import RouteAnimator from "./RouteAnimator";



function App() {
  
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
    <Router basename="/">
      <div className="bg-gradient-to-b from-cyan-100 to-cyan-300">
        <div className="flex justify-center items-center h-screen text-blue-900">
          <div className="relative flex justify-center items-center h-screen">
            <RouteAnimator />
          </div>
          <Navbar />
          {displayMoodModal && <MoodSelector onSelect={handleMoodSelection} onSubmit={handleMoodSubmit} onClose={handleCloseModal} />}
        </div>
      </div>
    </Router>
  );
}

export default App;
