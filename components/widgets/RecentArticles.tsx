"use client";

const articles = [
  { title: "第一篇技术文章", date: "2026/3/4" },
  { title: "React 学习笔记", date: "2026/3/2" },
  { title: "Tailwind CSS 实践", date: "2026/2/28" },
];

const pinColors = ["#6b9ae7", "#f59e0b", "#ef4444"];

export default function RecentArticles() {
  return (
    <div
      className="relative h-full rounded-2xl overflow-hidden"
      style={{
        background: "#c9a96e",
        boxShadow: "inset 0 0 30px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1)",
        border: "6px solid #a08050",
      }}
    >
      {/* 软木板纹理 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "repeating-radial-gradient(circle at 20% 30%, transparent 0, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px), repeating-radial-gradient(circle at 70% 60%, transparent 0, transparent 3px, rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 4px)",
          opacity: 0.6,
        }}
      />

      {/* 标题区 */}
      <div className="relative z-10 text-center pt-4 pb-2">
        <div className="text-[18px] font-bold text-white tracking-wider drop-shadow-md">
          RECENT
        </div>
        <div className="text-[14px] text-white/90 font-medium drop-shadow-sm">
          近期文章
        </div>
      </div>

      {/* 文章卡片 */}
      <div className="relative z-10 px-4 pb-4 flex flex-col gap-3">
        {articles.map((article, index) => {
          const pinColor = pinColors[index % pinColors.length];
          const isRight = index % 2 === 1;
          return (
            <div
              key={index}
              className="relative bg-white/90 rounded-lg px-3 py-2.5 shadow-sm"
              style={{
                transform: `rotate(${index === 1 ? 2 : index === 2 ? -1.5 : 0}deg)`,
                marginLeft: isRight ? "auto" : 0,
                marginRight: isRight ? 0 : "auto",
                width: "85%",
              }}
            >
              {/* 图钉 */}
              <div
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-sm"
                style={{
                  background: `radial-gradient(circle at 35% 35%, ${pinColor}dd, ${pinColor})`,
                  boxShadow: `0 1px 3px ${pinColor}66`,
                }}
              />
              {/* 标题线 */}
              <div className="h-2 rounded-full bg-gray-200 mb-1.5" style={{ width: "80%" }} />
              <div className="h-2 rounded-full bg-gray-100 mb-2" style={{ width: "60%" }} />
              {/* 日期 */}
              <div className="text-[10px] text-gray-400">{article.date}</div>
            </div>
          );
        })}
      </div>

      {/* 右下角萨摩耶小图标 */}
      <div className="absolute bottom-2 right-3 z-10">
        <img src="/samoye.png" alt="dog" className="w-10 h-10 object-contain" />
      </div>

      {/* 装饰：左上角便签 */}
      <div
        className="absolute top-5 left-3 z-10 w-8 h-8 rounded-sm shadow-sm flex items-center justify-center text-[10px]"
        style={{
          background: "#fef3c7",
          transform: "rotate(-8deg)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      </div>

      {/* 装饰：右上角铅笔便签 */}
      <div
        className="absolute top-5 right-3 z-10 w-8 h-8 rounded-sm shadow-sm flex items-center justify-center"
        style={{
          background: "#dbeafe",
          transform: "rotate(6deg)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
      </div>
    </div>
  );
}
