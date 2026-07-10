"use client";

import { useState, useEffect } from "react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 6) return "Good Night";
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

export default function GreetingCard() {
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="widget-card p-6 flex flex-col items-center justify-center text-center h-full">
      {/* 头像 */}
      <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-100 flex items-center justify-center text-4xl mb-4 shadow-sm">
        🐱
      </div>
      <p className="text-gray-400 text-[15px] mb-2 font-light">{greeting}</p>
      <p className="text-gray-700 text-[17px] leading-relaxed font-light">
        I'm <span className="text-teal-500 font-medium">Ivy</span>, Nice to
        <br />
        meet you!
      </p>
    </div>
  );
}
