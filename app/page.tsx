"use client";

import { useState } from "react";
import Sidebar from "@/components/widgets/Sidebar";
import GreetingCard from "@/components/widgets/GreetingCard";
import ClockWidget from "@/components/widgets/ClockWidget";
import NoticeCard from "@/components/widgets/NoticeCard";
import SocialLinks from "@/components/widgets/SocialLinks";
import MusicPlayer from "@/components/widgets/MusicPlayer";
import IllustrationCard from "@/components/widgets/IllustrationCard";
import RecommendCard from "@/components/widgets/RecommendCard";
import RecentArticles from "@/components/widgets/RecentArticles";

const backgrounds = [
  "bg-gradient-to-br from-[#c8dcfa] to-[#fad4e4]",
  "bg-[url('/bg1.jpg')] bg-cover bg-center",
  "bg-[url('/bg2.jpg')] bg-cover bg-center",
];

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);

  return (
    <div className={`relative min-h-screen overflow-auto flex items-start justify-center pt-1 ${backgrounds[bgIndex]}`}>
      {/* 限制最大容器并提供相对定位环境 */}
      <div className="relative select-none" style={{ width: "1200px", minHeight: "720px" }}>

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
          <SocialLinks onSwitchBg={() => setBgIndex((prev) => (prev + 1) % backgrounds.length)} />
        </div>

        {/* ================= 底部错落区 ================= */}
        {/* 随机推荐（偏左） */}
        <div className="absolute" style={{ left: "440px", top: "570px", width: "130px", height: "100px" }}>
          <RecommendCard />
        </div>

        {/* 音乐播放器（跨列，紧挨着推荐卡片右侧） */}
        <div className="absolute flex flex-col gap-2" style={{ left: "590px", top: "570px", width: "220px" }}>
          <MusicPlayer />
        </div>

        {/* ================= 右列 ================= */}
        <div className="absolute" style={{ left: "760px", top: "100px", width: "120px" }}>
          <button className="bg-[#6b9ae7] hover:bg-blue-600 text-white text-[13px] px-4 py-1.5 rounded-2xl flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor">
              <path d="M258.56 916.48c-30.72 0-64-5.12-92.16-15.36-64-23.04-97.28-69.12-99.84-128-2.56-89.6 66.56-120.32 120.32-143.36 51.2-23.04 79.36-35.84 79.36-74.24 0-46.08-79.36-84.48-112.64-89.6-12.8-5.12-20.48-17.92-20.48-30.72 2.56-12.8 15.36-23.04 28.16-20.48 46.08 7.68 156.16 56.32 156.16 140.8 0 74.24-61.44 99.84-110.08 120.32-56.32 25.6-92.16 43.52-89.6 97.28 0 38.4 23.04 66.56 64 81.92 66.56 25.6 166.4 7.68 192-23.04 10.24-10.24 25.6-12.8 35.84-2.56 10.24 10.24 12.8 25.6 2.56 35.84-25.6 30.72-89.6 51.2-153.6 51.2z" />
              <path d="M435.2 757.76c-5.12 5.12 2.56 17.92 12.8 25.6s23.04 10.24 28.16 5.12l107.52-81.92-102.4-74.24-46.08 125.44zM929.28 120.32c-28.16-20.48-69.12-15.36-89.6 15.36L509.44 591.36l102.4 74.24 332.8-455.68c20.48-28.16 12.8-69.12-15.36-89.6z" />
            </svg> 写文章
          </button>
        </div>

        <div className="absolute" style={{ left: "760px", top: "160px", width: "190px", height: "90px" }}>
          <ClockWidget />
        </div>

        {/* 近期文章看板 */}
        <div className="absolute" style={{ left: "760px", top: "290px", width: "260px", height: "260px" }}>
          <RecentArticles />
        </div>

      </div>
    </div>
  );
}
