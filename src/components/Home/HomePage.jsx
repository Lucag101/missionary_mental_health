import React, { useState } from "react";
import MoodSelector from "./MoodSelector";
import "../../styles/sharedStyles.css";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center flex-grow text-cyan-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 transition-all duration-500">Welcome!</h1>
          <h2 className="animate-pop-up text-xl pb-3">The mission field can be tough</h2>
          <h2 className="animate-pop-up-2 text-xl pb-3">It's time to focus on your mental health</h2>
          <h2 className="animate-pop-up-3 text-xl">Select an option below to begin</h2>
        </div>
      </div>
      {/* <div className="w-full p-4 bg-white">
        <div className="flex items-center justify-around">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md">Tab 1</button>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md">Tab 2</button>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md">Tab 3</button>
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;
