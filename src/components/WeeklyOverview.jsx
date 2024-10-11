import React, { useState, useEffect } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const WeeklyOverview = () => {
  const [currentDay, setCurrentDay] = useState("");
  const [randomNumbers, setRandomNumbers] = useState([]);

  useEffect(() => {
    const today = new Date().getDay();
    setCurrentDay(days[today === 0 ? 6 : today - 1]); // Adjust for Sunday being 0

    setRandomNumbers(days.map(() => Math.floor(Math.random() * 20)));
  }, []);

  const getBackgroundColor = (day) => {
    const currentIndex = days.indexOf(currentDay);
    const dayIndex = days.indexOf(day);

    if (day === currentDay) return "bg-stone-700";
    if (dayIndex < currentIndex) return "";
    return "text-stone-600 text-opacity-50";
  };

  return (
    <div className="flex w-full ">
      {days.map((day, index) => (
        <div
          key={day}
          className={` h-24 p-2 flex-1 w-full flex flex-col justify-between items-center border-r border-stone-700 ${getBackgroundColor(
            day
          )} ${day === currentDay ? "text-white" : ""}`}
        >
          <h3 className="text-xs font-bold">{day}</h3>
          <p className="text-center text-3xl font-thin font-fustat">
            {randomNumbers[index]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeeklyOverview;
