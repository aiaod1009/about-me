"use client";

import { useState } from "react";

const menuItems = [
  { icon: "📄", label: "近期文章" },
  { icon: "📦", label: "我的项目" },
  { icon: "🌐", label: "关于网站" },
  { icon: "⭐", label: "推荐分享" },
  { icon: "🌸", label: "优秀博客" },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(4);

  return (
    <div className="widget-card p-5 h-full flex flex-col">
      {/* 用户信息 */}
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center text-sm">
          🐱
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-gray-800 text-[15px]">Ivy-neko</span>
          <span className="text-xs text-teal-500">[开发中]</span>
        </div>
      </div>

      {/* 分类标题 */}
      <div className="text-[11px] text-gray-400 font-medium tracking-widest mb-3 uppercase">
        General
      </div>

      {/* 菜单列表 */}
      <nav className="flex flex-col gap-0.5 flex-1">
        {menuItems.map((item, index) => (
          <button
            key={item.label}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[14px] text-left transition-all duration-200 cursor-pointer ${
              activeIndex === index
                ? "bg-teal-50/80 text-teal-700 font-medium"
                : "text-gray-500 hover:bg-gray-50/60"
            }`}
          >
            <span className="text-[15px] opacity-70">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
