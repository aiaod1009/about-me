import Sidebar from "@/components/widgets/Sidebar";
import GreetingCard from "@/components/widgets/GreetingCard";
import ClockWidget from "@/components/widgets/ClockWidget";
import CalendarWidget from "@/components/widgets/CalendarWidget";
import NoticeCard from "@/components/widgets/NoticeCard";
import SocialLinks from "@/components/widgets/SocialLinks";
import MusicPlayer from "@/components/widgets/MusicPlayer";
import IllustrationCard from "@/components/widgets/IllustrationCard";
import RecommendCard from "@/components/widgets/RecommendCard";

export default function Home() {
  return (
    <div className="page-bg min-h-screen p-6 md:p-10">
      {/* 4列网格布局 */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-4 gap-4 auto-rows-[minmax(80px,auto)]">
        {/* 左侧边栏 - 跨4行 */}
        <div className="col-span-1 row-span-4">
          <Sidebar />
        </div>

        {/* 顶部插画 */}
        <div className="col-span-1 row-span-1">
          <IllustrationCard />
        </div>

        {/* 写文章按钮 */}
        <div className="col-span-2 flex items-start justify-end pt-2">
          <button className="bg-teal-500 hover:bg-teal-600 text-white text-[13px] px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer">
            <span>✏️</span> 写文章
          </button>
        </div>

        {/* 问候卡片 - 跨2列2行 */}
        <div className="col-span-2 row-span-2">
          <GreetingCard />
        </div>

        {/* 时钟 */}
        <div className="col-span-1 row-span-1">
          <ClockWidget />
        </div>

        {/* 日历 - 跨2行 */}
        <div className="col-span-1 row-span-2">
          <CalendarWidget />
        </div>

        {/* 最新公告 */}
        <div className="col-span-1 row-span-1">
          <NoticeCard />
        </div>

        {/* 社交链接 */}
        <div className="col-span-1 row-span-1 flex items-center">
          <SocialLinks />
        </div>

        {/* 随机推荐 */}
        <div className="col-span-1 row-span-1">
          <RecommendCard />
        </div>

        {/* 音乐播放器 */}
        <div className="col-span-1 row-span-1">
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
}
