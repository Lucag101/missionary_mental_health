import React, { useState } from "react";
import MoodSelector from "./MoodSelector";
import "../../styles/sharedStyles.css";

function HomePage({displayMoodModal}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center flex-grow">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 transition-all duration-500">Welcome!</h1>
          {!displayMoodModal &&  (
            <div>
            <h2 className="animate-pop-up text-xl pb-3">The mission field can be tough</h2>
            <h2 className="animate-pop-up-2 text-xl pb-3">It's time to focus on your mental health</h2>
            <h2 className="animate-pop-up-3 text-xl">Select an option below to begin</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
