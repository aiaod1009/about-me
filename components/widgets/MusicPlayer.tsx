"use client";

import { useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1420);

  return (
    <div className="flex flex-col gap-2">
      {/* 播放器 */}
      <div className="widget-card p-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-flesh-light flex items-center justify-center text-base">

        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] text-gray-600 font-medium truncate">
            Close To You
          </p>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-8 h-8 rounded-full bg-flesh hover:bg-flesh-dark text-white flex items-center justify-center transition-colors cursor-pointer text-sm shadow-sm"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
      </div>

      {/* 点赞 */}
      <div className="flex items-center gap-1.5 ml-2">
        <button
          onClick={() => {
            setLiked(!liked);
            setLikeCount(liked ? likeCount - 1 : likeCount + 1);
          }}
          className={`text-[11px] px-2.5 py-1 rounded-full transition-colors cursor-pointer ${liked
            ? "bg-flesh-soft text-flesh-dark"
            : "bg-flesh-light text-flesh hover:text-flesh-dark"
            }`}
        >
          {liked ? "❤️" : "🤍"} {likeCount}
        </button>
      </div>
    </div>
  );
}
