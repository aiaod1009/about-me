"use client";

import { useState, useEffect } from "react";

export default function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return (
    <div className="widget-card p-5 flex items-center justify-center">
      <div className="clock-digit text-[52px] text-gray-700 tracking-wider">
        {hours}
        <span className="text-blue-400 mx-1">:</span>
        {minutes}
      </div>
    </div>
  );
}
