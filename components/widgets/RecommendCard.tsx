export default function RecommendCard() {
  return (
    <div className="widget-card p-4">
      <h3 className="text-[13px] font-medium text-gray-500 mb-2.5">随机推荐</h3>
      <div className="flex items-start gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-300 text-sm shrink-0">
          - -
        </div>
        <div className="min-w-0">
          <h4 className="text-[13px] font-medium text-gray-700">待整理</h4>
          <p className="text-[11px] text-gray-400 mt-1 leading-relaxed line-clamp-2">
            东西太多，每次整理部分吧。最近流行整活系列，发现热门的话题并不是很喜欢……
          </p>
        </div>
      </div>
    </div>
  );
}
