"use client";

import { useState } from "react";

const weekDays = ["一", "二", "三", "四", "五", "六", "日"];

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const daysInMonth = lastDay.getDate();
  // 0=Sun, 1=Mon... convert to Mon=0
  let startDay = firstDay.getDay() - 1;
  if (startDay < 0) startDay = 6;

  const days: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  return days;
}

export default function CalendarWidget() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const today = now.getDate();
  const isCurrentMonth = now.getFullYear() === year && now.getMonth() + 1 === month;

  const days = getCalendarDays(year, month);
  const weekDayNames = ["日", "一", "二", "三", "四", "五", "六"];
  const currentWeekDay = weekDayNames[now.getDay()];

  return (
    <div className="widget-card p-4 h-full">
      {/* 日期标题 */}
      <div className="text-[13px] text-gray-400 mb-3">
        {year}/{month.toString().padStart(2, "0")}/{today.toString().padStart(2, "0")}{" "}
        周{currentWeekDay}
      </div>

      {/* 星期标题 */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-[11px] text-gray-400 font-medium"
          >
            {day}
          </div>
        ))}
      </div>

      {/* 日期网格 */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div
            key={index}
            className="text-center text-[12px] py-1.5 rounded-full"
          >
            {day === null ? (
              <span />
            ) : isCurrentMonth && day === today ? (
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pink-500 text-white text-[11px] font-medium">
                {day}
              </span>
            ) : (
              <span className="text-gray-500 hover:bg-gray-100 rounded-full inline-flex items-center justify-center w-6 h-6 cursor-pointer">
                {day}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
