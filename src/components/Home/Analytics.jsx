import React, { useState } from "react";
import "../../styles/sharedStyles.css";
import previous_entries from "../../logs.json";

function formatReadableDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// function formatReadableDate(dateString) {
//   const date = new Date(dateString);
//   const month = date.toLocaleString("default", { month: "short" });
//   const day = date.getDate();
//   const year = date.getFullYear();
//   let hour = date.getHours();
//   const minute = date.getMinutes();
//   const period = hour >= 12 ? "PM" : "AM";
//
//   // Convert to 12-hour format
//   hour = hour % 12 || 12;
//
//   const formattedDate = `${month} ${day}, ${year} ${hour}:${minute > 9 ? minute : "0" + minute} ${period}`;
//   return formattedDate;
// }

function Analytics() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen pb-[80px] pt-[20px]">
      <h1 className="mt-5">Analytics Page</h1>
      
      <div className="max-h-screen my-2 overflow-y-auto max-h-[90vh] pb-[10px]">
        {previous_entries.map((entry, index) => (
          <div key={index} className="p-5 mx-3 my-2 border rounded-lg border-blue-500/20 bg-blue-100/40 ">
            <div className="py-2 text-4xl">{entry.mood}</div>
            <p className="font-medium">{formatReadableDate(entry.date)}</p>
            <p className="font-extralight">{entry.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Analytics;
