import "./Modals.css";
import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../icons/close_icon.svg";
// import { ReactComponent as ReactLogo } from "./logo.svg";
// import "./MoodSelector.css"; // Import the CSS file for styling

const moodOptions = ["😁", "🙂", "😐", "😕", "😢"];

function MoodSelector({ onSelect, onSubmit, onClose }) {
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    onSelect(mood); // Pass the selected mood to the parent component
  };

  return (
    <div className="mood-modal">
      <div className="mood-selector">
        <CloseIcon className="modal-close-icon" onClick={onClose} />
        <p>How are you doing today?</p>
        <p>Select your mood:</p>
        <div className="mood-options">
          {moodOptions.map((mood) => (
            <span key={mood} className={`mood-option ${selectedMood === mood ? "selected" : ""}`} onClick={() => handleMoodClick(mood)}>
              {mood}
            </span>
          ))}
        </div>
        <button className="modal-confirm-button" onClick={onSubmit}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default MoodSelector;
