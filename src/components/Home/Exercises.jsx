import React, { useState } from "react";
import '../../styles/sharedStyles.css'
import Timer from "./Timer";

function Exercises() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
        <h1 class="text-3xl font-bold mb-4">First, let's breath together</h1>
        <h3>Start the timer then close your eyes</h3>
        <Timer />
        
    </div>
  );
}

export default Exercises;
