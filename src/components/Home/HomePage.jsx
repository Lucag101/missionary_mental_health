import React, { useState } from "react";
import MoodSelector from "./MoodSelector";
import "../../styles/sharedStyles.css";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center flex-grow text-cyan-900">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">Welcome!</h1>
          <h2 className="text-xl">Time to focus on your mental health</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
