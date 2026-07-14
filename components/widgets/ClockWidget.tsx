"use client";

import { useState, useEffect } from "react";

// Refined 7-segment LCD display - fits within container (190x90 - p-5 padding = 150x50)
const DIGIT_W = 35;
const DIGIT_H = 65;
const SEG_THICKNESS = 3;
const SEG_GAP = 2;

// 7-segment patterns: [a(top), b(top-right), c(bottom-right), d(bottom), e(bottom-left), f(top-left), g(middle)]
const DIGIT_MAP: Record<string, boolean[]> = {
  "0": [true, true, true, true, true, true, false],
  "1": [false, true, true, false, false, false, false],
  "2": [true, true, false, true, true, false, true],
  "3": [true, true, true, true, false, false, true],
  "4": [false, true, true, false, false, true, true],
  "5": [true, false, true, true, false, true, true],
  "6": [true, false, true, true, true, true, true],
  "7": [true, true, true, false, false, false, false],
  "8": [true, true, true, true, true, true, true],
  "9": [true, true, true, true, false, true, true],
};

function SevenSegmentDigit({ digit }: { digit: string }) {
  const segs = DIGIT_MAP[digit] || DIGIT_MAP["0"];
  const onColor = "#3d4f4f";
  const offColor = "#d5d9da";

  // Calculate segment dimensions
  const hSegW = DIGIT_W - 2 * SEG_THICKNESS - 2 * SEG_GAP;
  const vSegH = (DIGIT_H - 3 * SEG_THICKNESS - 4 * SEG_GAP) / 2;

  // Positions
  const hY = [0.5, DIGIT_H / 2 - SEG_THICKNESS / 2, DIGIT_H - SEG_THICKNESS - 0.5];
  const hX = SEG_THICKNESS + SEG_GAP;

  const vTop = SEG_THICKNESS + SEG_GAP;
  const vBot = vTop + vSegH + SEG_THICKNESS;
  const vLeftX = 0.5;
  const vRightX = DIGIT_W - SEG_THICKNESS - 0.5;

  const r = SEG_THICKNESS / 2;

  return (
    <svg width={DIGIT_W} height={DIGIT_H} viewBox={`0 0 ${DIGIT_W} ${DIGIT_H}`}>
      {/* a - top horizontal */}
      <rect x={hX} y={hY[0]} width={hSegW} height={SEG_THICKNESS} rx={r} fill={segs[0] ? onColor : offColor} />
      {/* b - top right vertical */}
      <rect x={vRightX} y={vTop} width={SEG_THICKNESS} height={vSegH} rx={r} fill={segs[1] ? onColor : offColor} />
      {/* c - bottom right vertical */}
      <rect x={vRightX} y={vBot} width={SEG_THICKNESS} height={vSegH} rx={r} fill={segs[2] ? onColor : offColor} />
      {/* d - bottom horizontal */}
      <rect x={hX} y={hY[2]} width={hSegW} height={SEG_THICKNESS} rx={r} fill={segs[3] ? onColor : offColor} />
      {/* e - bottom left vertical */}
      <rect x={vLeftX} y={vBot} width={SEG_THICKNESS} height={vSegH} rx={r} fill={segs[4] ? onColor : offColor} />
      {/* f - top left vertical */}
      <rect x={vLeftX} y={vTop} width={SEG_THICKNESS} height={vSegH} rx={r} fill={segs[5] ? onColor : offColor} />
      {/* g - middle horizontal */}
      <rect x={hX} y={hY[1]} width={hSegW} height={SEG_THICKNESS} rx={r} fill={segs[6] ? onColor : offColor} />
    </svg>
  );
}

function Colon() {
  const color = "#3d4f4f";
  return (
    <svg width="8" height={DIGIT_H} viewBox={`0 0 8 ${DIGIT_H}`}>
      <circle cx="4" cy={DIGIT_H * 0.32} r="2" fill={color} />
      <circle cx="4" cy={DIGIT_H * 0.68} r="2" fill={color} />
    </svg>
  );
}

export default function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return (
    <div className="widget-card p-5 flex items-center justify-center h-[100px] overflow-hidden">
      <div
        className="flex items-center gap-1 rounded-[12px] px-2.5 py-1.5"
        style={{
          background: "linear-gradient(180deg, #f2f4f5 0%, #eaeced 100%)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
          border: "1px solid rgba(255,255,255,0.7)",
        }}
      >
        <SevenSegmentDigit digit={hours[0]} />
        <SevenSegmentDigit digit={hours[1]} />
        <Colon />
        <SevenSegmentDigit digit={minutes[0]} />
        <SevenSegmentDigit digit={minutes[1]} />
      </div>
    </div>
  );
}
