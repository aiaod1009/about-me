"use client";

import type { MouseEvent, PointerEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type FloatingNote = {
  id: number;
  text: string;
  left: number;
};

const petLines = [
  "汪!",
  "摸摸我",
  "今天也要开心",
  "我在看家",
  "想出去玩",
];

export default function IllustrationCard() {
  const [isHappy, setIsHappy] = useState(false);
  const [isNapping, setIsNapping] = useState(false);
  const [happiness, setHappiness] = useState(76);
  const [energy, setEnergy] = useState(68);
  const [bubbleText, setBubbleText] = useState("Aiaod's dog");
  const [notes, setNotes] = useState<FloatingNote[]>([]);
  const noteId = useRef(0);
  const happyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mood = useMemo(() => {
    if (isNapping) return "zzZ";
    if (happiness > 88) return "开心";
    if (energy < 35) return "犯困";
    return "乖巧";
  }, [energy, happiness, isNapping]);

  useEffect(() => {
    if (!isNapping) return;

    const timer = setInterval(() => {
      setEnergy((value) => Math.min(100, value + 4));
      setHappiness((value) => Math.max(60, value - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [isNapping]);

  useEffect(() => {
    return () => {
      if (happyTimer.current) clearTimeout(happyTimer.current);
    };
  }, []);

  const popNote = useCallback((text: string) => {
    const id = noteId.current + 1;
    noteId.current = id;
    setNotes((current) => [...current, { id, text, left: 34 + Math.random() * 38 }]);
    setTimeout(() => {
      setNotes((current) => current.filter((note) => note.id !== id));
    }, 1200);
  }, []);

  const handleClick = useCallback(() => {
    setIsNapping(false);
    setIsHappy(true);
    setHappiness((value) => Math.min(100, value + 8));
    setEnergy((value) => Math.max(0, value - 4));

    const line = petLines[Math.floor(Math.random() * petLines.length)];
    setBubbleText(line);
    popNote("+1");

    if (happyTimer.current) clearTimeout(happyTimer.current);
    happyTimer.current = setTimeout(() => setIsHappy(false), 700);
  }, [popNote]);

  const handlePetPointer = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if ((event.target as HTMLElement).closest("button")) return;
      handleClick();
    },
    [handleClick],
  );

  const handleNap = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setIsNapping((value) => !value);
      setBubbleText(isNapping ? "醒啦!" : "睡一会");
      popNote(isNapping ? "!" : "zZ");
    },
    [isNapping, popNote],
  );

  const handleSnack = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setIsNapping(false);
      setHappiness((value) => Math.min(100, value + 12));
      setEnergy((value) => Math.min(100, value + 6));
      setBubbleText("好吃!");
      popNote("+12");
    },
    [popNote],
  );

  return (
    <div
      className="widget-card h-full overflow-hidden relative cursor-pointer group"
      onPointerDown={handlePetPointer}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleClick();
        }
      }}
      aria-label="和萨摩耶互动"
    >
      <div className="absolute left-[84px] top-[38px] z-30">
        <div className="rounded-2xl rounded-br-md bg-white/85 px-3 py-1.5 text-[12px] font-medium text-gray-600 shadow-sm backdrop-blur-md transition-transform group-hover:-translate-y-0.5">
          {bubbleText}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 22, background: "#f5efe6", borderRadius: "0 0 30px 30px" }}
      />
      <div
        className="absolute left-0 right-0"
        style={{ bottom: 22, height: 4, background: "#e8e0d4" }}
      />

      <img
        src="/samoye.png"
        alt="Samoyed"
        className={`pet-samoyed absolute transition-transform duration-150 ${isHappy ? "pet-happy scale-105" : ""
          } ${isNapping ? "pet-napping" : ""}`}
        style={{
          width: "230px",
          right: "-50px",
          bottom: 4,
        }}
      />

      {notes.map((note) => (
        <span
          key={note.id}
          className="pet-floating-note absolute z-40 text-[13px] font-bold text-rose-400"
          style={{ left: `${note.left}%`, bottom: 52 }}
        >
          {note.text}
        </span>
      ))}
    </div>
  );
}
