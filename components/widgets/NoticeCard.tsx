export default function NoticeCard() {
  return (
    <div className="bg-teal-50/60 backdrop-blur-sm rounded-[20px] p-4 border border-teal-100/40">
      <h3 className="text-[13px] font-medium text-gray-500 mb-2.5">最新公告</h3>
      <div className="flex items-start gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-base shrink-0">
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
