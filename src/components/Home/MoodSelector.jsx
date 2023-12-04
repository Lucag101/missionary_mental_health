import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../icons/close_icon.svg";

const moodOptions = ["😁", "🙂", "😐", "😕", "😢"];

function MoodSelector({ onSelect, onSubmit, onClose }) {
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    onSelect(mood); // Pass the selected mood to the parent component
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white pt-10 pb-5 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 rounded-2xl w-11/12 text-center">
        <CloseIcon className="absolute top-4 right-4 h-6 cursor-pointer stroke-2 hover:opacity-80" onClick={onClose} />
        <p className="text-lg font-bold">How are you doing today?</p>
        <p className="mb-4">Select your mood:</p>
        <div className="flex justify-around">
          {moodOptions.map((mood) => (
            <span
              key={mood}
              className={`cursor-pointer text-4xl ${
                selectedMood === mood
                  ? "transform scale-125 transition-transform duration-75 ease-in delay-0"
                  : "hover:transform hover:scale-125 hover:transition-transform duration-75 ease-in delay-0"
              }`}
              onClick={() => handleMoodClick(mood)}
            >
              {mood}
            </span>
          ))}
        </div>
        <button className="bg-cyan-400 text-white text-sm font-bold mt-4 px-6 py-3 rounded cursor-pointer hover:bg-cyan-500" onClick={onSubmit}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default MoodSelector;
