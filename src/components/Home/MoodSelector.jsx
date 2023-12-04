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
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="relative w-11/12 px-5 pt-10 pb-5 text-center bg-white sm:px-8 md:px-12 lg:px-16 xl:px-20 rounded-2xl">
        <CloseIcon className="absolute w-6 h-6 cursor-pointer stroke-2 top-4 right-4 hover:opacity-80" onClick={onClose} />
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
        <button className="px-6 py-3 mt-4 text-sm font-bold text-white scale-105 rounded-lg cursor-pointer bg-cyan-400 hover:bg-cyan-500 active:animate-pulse" onClick={onSubmit}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default MoodSelector;
