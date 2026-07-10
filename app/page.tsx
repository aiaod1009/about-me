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
    <div className="page-bg min-h-screen p-8">
      <div className="max-w-[1200px] mx-auto">
        {/* 主布局：左侧边栏 + 右侧内容区 */}
        <div className="flex gap-6">

          {/* 左侧边栏 - 固定宽度 */}
          <div className="w-[220px] shrink-0">
            <Sidebar />
          </div>

          {/* 右侧内容区 - 自适应 */}
          <div className="flex-1 min-w-0">

            {/* 第一行：插画 + 写文章按钮 */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-[200px] h-[140px]">
                <IllustrationCard />
              </div>
              <div className="flex-1 flex justify-end pt-4">
                <button className="bg-teal-500 hover:bg-teal-600 text-white text-[13px] px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer">
                  <span>✏️</span> 写文章
                </button>
              </div>
            </div>

            {/* 第二行：问候卡片 + 时钟 */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1 h-[220px]">
                <GreetingCard />
              </div>
              <div className="w-[180px] h-[100px]">
                <ClockWidget />
              </div>
            </div>

            {/* 第三行：公告 + 社交链接 + 日历（日历跨多行） */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                {/* 公告 */}
                <div className="mb-4">
                  <NoticeCard />
                </div>
                {/* 社交链接 */}
                <SocialLinks />
              </div>
              <div className="w-[220px]">
                <CalendarWidget />
              </div>
            </div>

            {/* 第四行：随机推荐 + 音乐播放器 */}
            <div className="flex gap-4">
              <div className="w-[180px]">
                <RecommendCard />
              </div>
              <div className="flex-1">
                <MusicPlayer />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
