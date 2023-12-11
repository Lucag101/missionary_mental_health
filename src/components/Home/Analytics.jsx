import React from "react";
// import "../../styles/sharedStyles.css";
import "../../styles/chartStyles.css";
import previous_entries from "../../logs.json";
import { Chart } from "react-charts";

// import Line from "./MoodChart";

// Function to map emoji moods to numerical values
const mapMoodToNumber = (emoji) => {
  const moodMap = {
    "😐": 3,
    "😢": 1,
    "😁": 5,
    "🙂": 4,
    "😕": 2,
  };

  return moodMap[emoji] || 0; // Default to 0 if not found in the mapping
};

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
  const data = [
    {
      label: "Series 1",
      data: previous_entries.map((entry) => ({
        primary: new Date(entry.date),
        secondary: mapMoodToNumber(entry.mood),
      })),
    },
  ];

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
        // Add other configurations like elementType if needed
      },
    ],
    []
  );

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen pb-[80px] pt-[20px]">
      <h1 className="mt-5">Analytics Page</h1>

      <div className="my-2 overflow-y-auto max-h-[90vh] pb-[10px]">
        <div className="mb-4 mood-chart">
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes,
            }}
          />
        </div>
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
