const projects = [
  {
    name: "个人博客",
    desc: "Next.js + TypeScript",
  },
  {
    name: "任务管理器",
    desc: "React + Zustand",
  },
  {
    name: "天气小组件",
    desc: "Vue + API",
  },
];

export default function ProjectList() {
  return (
    <div className="widget-card p-4 h-full flex flex-col">
      <h3 className="text-[13px] font-medium text-gray-500 mb-3 flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
        我的项目
      </h3>
      <div className="flex flex-col gap-1.5 flex-1">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-xl px-3 py-2 hover:bg-gray-50/60 transition-colors cursor-pointer group"
          >
            <h4 className="text-[13px] font-medium text-gray-700 group-hover:text-teal-600 transition-colors">
              {project.name}
            </h4>
            <p className="text-[11px] text-gray-400">{project.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-gray-100 text-center">
        <span className="text-[12px] text-teal-500 cursor-pointer hover:text-teal-600 transition-colors">
          查看更多 →
        </span>
      </div>
    </div>
  );
}
