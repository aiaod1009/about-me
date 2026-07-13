export default function NoticeCard() {
  return (
    <div className="widget-card p-4">
      <h3 className="text-[13px] font-medium text-gray-500 mb-2.5">最新公告</h3>
      <div className="flex items-start gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center text-base shrink-0">
          🐾
        </div>
        <div className="min-w-0">
          <h4 className="text-[13px] font-medium text-gray-700">公告</h4>
          <p className="text-[11px] text-gray-400 mt-0.5">
            该用户正在搭建中
          </p>
          <span className="text-[10px] text-gray-300 mt-1 block">2026/3/4</span>
        </div>
      </div>
    </div>
  );
}
