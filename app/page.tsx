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
      {/* 限制最大容器并提供相对定位环境 */}
      <div className="relative select-none" style={{ width: "1200px", height: "720px" }}>

        {/* ================= 左列 (Left Column) ================= */}

        {/* 左侧边栏：顶部与时钟对齐 */}
        <div className="absolute" style={{ left: "180px", top: "140px", width: "220px", height: "390px" }}>
          <Sidebar />
        </div>

        {/* 最新公告：底部与整个界面底线对齐 */}
        <div className="absolute" style={{ left: "180px", top: "560px", width: "220px", height: "120px" }}>
          <NoticeCard />
        </div>


        {/* ================= 中列 (Center Column) ================= */}

        {/* 猫咪插画 */}
        <div className="absolute" style={{ left: "440px", top: "60px", width: "280px", height: "160px" }}>
          <IllustrationCard />
        </div>

        {/* 问候卡片 */}
        <div className="absolute" style={{ left: "440px", top: "240px", width: "280px", height: "260px" }}>
          <GreetingCard />
        </div>

        {/* 社交链接：紧贴问候卡片下方 */}
        <div className="absolute flex justify-center" style={{ left: "440px", top: "510px", width: "280px", height: "40px" }}>
          <SocialLinks />
        </div>

        {/* 随机推荐：位于中列偏左下 */}
        <div className="absolute" style={{ left: "440px", top: "570px", width: "140px", height: "110px" }}>
          <RecommendCard />
        </div>


        {/* ================= 右列 (Right Column) ================= */}

        {/* 顶部操作区 (写文章按钮) */}
        <div className="absolute" style={{ left: "760px", top: "90px", width: "260px" }}>
          <button className="bg-[#1cb39b] hover:bg-teal-600 text-white text-[13px] px-4 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer">
            <span>✏️</span> 写文章
          </button>
        </div>

        {/* 电子时钟 */}
        <div className="absolute" style={{ left: "760px", top: "140px", width: "180px", height: "100px" }}>
          <ClockWidget />
        </div>

        {/* 日历组件：中心与问候卡片近似 */}
        <div className="absolute" style={{ left: "760px", top: "260px", width: "260px", height: "260px" }}>
          <CalendarWidget />
        </div>

        {/* 音乐播放器：与底部的推荐卡片齐平 */}
        <div className="absolute flex flex-col gap-2" style={{ left: "760px", top: "570px", width: "240px" }}>
          <MusicPlayer />
          <div className="pl-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-rose-50/80 backdrop-blur-sm rounded-full text-[10px] text-rose-400 shadow-sm">
              ❤️ <span className="text-gray-400 font-mono">11424</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}