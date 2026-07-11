import Sidebar from "@/components/widgets/Sidebar";
import GreetingCard from "@/components/widgets/GreetingCard";
import ClockWidget from "@/components/widgets/ClockWidget";
import ProjectList from "@/components/widgets/ProjectList";
import NoticeCard from "@/components/widgets/NoticeCard";
import SocialLinks from "@/components/widgets/SocialLinks";
import MusicPlayer from "@/components/widgets/MusicPlayer";
import IllustrationCard from "@/components/widgets/IllustrationCard";
import RecommendCard from "@/components/widgets/RecommendCard";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#c8dcfa] to-[#fad4e4]">
      {/* 限制最大容器并提供相对定位环境 */}
      <div className="relative select-none" style={{ width: "1200px", height: "720px" }}>

        {/* ================= 左列 ================= */}
        <div className="absolute" style={{ left: "180px", top: "140px", width: "220px", height: "390px" }}>
          <Sidebar />
        </div>

        <div className="absolute" style={{ left: "180px", top: "550px", width: "220px", height: "120px" }}>
          <NoticeCard />
        </div>

        {/* ================= 中列 ================= */}
        <div className="absolute" style={{ left: "440px", top: "70px", width: "280px", height: "150px" }}>
          <IllustrationCard />
        </div>

        <div className="absolute" style={{ left: "440px", top: "240px", width: "280px", height: "250px" }}>
          <GreetingCard />
        </div>

        <div className="absolute flex justify-center" style={{ left: "440px", top: "510px", width: "280px", height: "40px" }}>
          <SocialLinks />
        </div>

        {/* ================= 底部错落区 ================= */}
        {/* 随机推荐（偏左） */}
        <div className="absolute" style={{ left: "440px", top: "570px", width: "130px", height: "100px" }}>
          <RecommendCard />
        </div>

        {/* 音乐播放器（跨列，紧挨着推荐卡片右侧） */}
        <div className="absolute flex flex-col gap-2" style={{ left: "590px", top: "570px", width: "220px" }}>
          <MusicPlayer />
          <div className="pl-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/40 backdrop-blur-md rounded-full text-[10px] text-rose-400 shadow-sm border border-white/50">
              ❤️ <span className="text-gray-500 font-mono">11424</span>
            </span>
          </div>
        </div>

        {/* ================= 右列 ================= */}
        <div className="absolute" style={{ left: "760px", top: "100px", width: "120px" }}>
          <button className="bg-[#3b82f6] hover:bg-blue-600 text-white text-[13px] px-4 py-1.5 rounded-2xl flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer">
            <span>✏️</span> 写文章
          </button>
        </div>

        <div className="absolute" style={{ left: "760px", top: "160px", width: "190px", height: "90px" }}>
          <ClockWidget />
        </div>

        {/* 项目列表 */}
        <div className="absolute" style={{ left: "760px", top: "290px", width: "260px", height: "260px" }}>
          <ProjectList />
        </div>

      </div>
    </div>
  );
}