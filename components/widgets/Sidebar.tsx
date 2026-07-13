"use client";

import { useState } from "react";

const menuItems = [
  {
    label: "近期文章",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    label: "我的项目",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "关于网站",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "推荐分享",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: "优秀博客",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="8" y1="7" x2="16" y2="7" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(4);

  return (
    <div className="widget-card p-5 h-full flex flex-col">
      {/* 用户信息 */}
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--flesh-light)] to-[var(--flesh-soft)] flex items-center justify-center text-sm overflow-hidden">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" fill="#f59e0b" opacity="0.6" />
            <path d="M4 20c0-4 4-7 8-7s8 3 8 7" fill="#f59e0b" opacity="0.4" />
          </svg>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-gray-800 text-[15px]">Aiaod</span>
          <span className="text-xs text-flesh-dark">[开发中]</span>
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
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[14px] text-left transition-all duration-200 cursor-pointer ${activeIndex === index
              ? "bg-[var(--flesh-light)]/80 text-flesh-dark font-medium"
              : "text-gray-500 hover:bg-gray-50/60"
              }`}
          >
            <span className="text-gray-400 opacity-80">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
