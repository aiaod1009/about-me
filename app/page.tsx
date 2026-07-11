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
    <div className="page-bg relative min-h-screen overflow-hidden flex items-center justify-center">
      <div className="relative" style={{ width: "1100px", height: "700px" }}>

        {/* 左侧边栏 */}
        <div className="absolute" style={{ left: "3%", top: "10%", width: "17%", height: "60%" }}>
          <Sidebar />
        </div>

        {/* 插画卡片 - 顶部中间 */}
        <div className="absolute" style={{ left: "23%", top: "2%", width: "20%", height: "18%" }}>
          <IllustrationCard />
        </div>

        {/* 写文章按钮 */}
        <div className="absolute" style={{ left: "46%", top: "7%" }}>
          <button className="bg-teal-500 hover:bg-teal-600 text-white text-[13px] px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer">
            <span>✏️</span> 写文章
          </button>
        </div>

        {/* 问候卡片 - 中心 */}
        <div className="absolute" style={{ left: "23%", top: "22%", width: "24%", height: "32%" }}>
          <GreetingCard />
        </div>

        {/* 时钟 - 紧挨问候卡片右上方 */}
        <div className="absolute" style={{ left: "49%", top: "10%", width: "15%", height: "14%" }}>
          <ClockWidget />
        </div>

        {/* 日历 - 紧挨时钟下方 */}
        <div className="absolute" style={{ left: "49%", top: "26%", width: "17%", height: "38%" }}>
          <CalendarWidget />
        </div>

        {/* 最新公告 - 左下 */}
        <div className="absolute" style={{ left: "8%", top: "72%", width: "15%", height: "17%" }}>
          <NoticeCard />
        </div>

        {/* 社交链接 - 中下 */}
        <div className="absolute" style={{ left: "26%", top: "58%" }}>
          <SocialLinks />
        </div>

        {/* 随机推荐 - 中下偏左 */}
        <div className="absolute" style={{ left: "28%", top: "68%", width: "15%", height: "19%" }}>
          <RecommendCard />
        </div>

        {/* 音乐播放器 - 中下偏右 */}
        <div className="absolute" style={{ left: "46%", top: "70%", width: "18%", height: "15%" }}>
          <MusicPlayer />
        </div>

      </div>
    </div>
  );
}
