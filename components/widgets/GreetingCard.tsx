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
      <div className="w-[72px] h-[72px] rounded-full overflow-hidden mb-4 shadow-sm ring-2 ring-yellow-100/60">
        <img src="/aiaod.jpg" alt="avatar" className="w-full h-full object-cover" />
      </div>
      <p className="text-gray-400 text-[15px] mb-2 font-light">{greeting}</p>
      <p className="text-gray-700 text-[17px] leading-relaxed font-light">
        I&apos;m <span className="text-pink-500 font-medium">Aiaod</span>, Nice to
        <br />
        meet you!
      </p>
    </div>
  );
}
