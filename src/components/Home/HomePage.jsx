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
      <div className="w-full p-4 bg-white">
        <div className="flex items-center justify-around">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md">Tab 1</button>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md">Tab 2</button>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md">Tab 3</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
