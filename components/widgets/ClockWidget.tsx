"use client";

import { useState, useEffect } from "react";

// More accurate 7-segment LCD display
// Digit size: 28x52, with thin segments
const DIGIT_W = 28;
const DIGIT_H = 52;
const SEG_W = 4; // segment thickness
const GAP = 1.5; // gap between segments

// Segment layout positions
// Each segment is a rounded rectangle
// Horizontal: width = DIGIT_W - 2*SEG_W - 2*GAP, height = SEG_W
// Vertical: width = SEG_W, height = (DIGIT_H - 3*SEG_W - 4*GAP) / 2

const H_SEG_W = DIGIT_W - 2 * SEG_W - 2 * GAP;
const V_SEG_H = (DIGIT_H - 3 * SEG_W - 4 * GAP) / 2;

// Segment paths with angled ends for realistic LCD look
function getSegmentPath(type: 'h' | 'v', x: number, y: number, w: number, h: number): string {
  const r = Math.min(w, h) / 2;
  if (type === 'h') {
    // Horizontal segment with slightly angled ends
    return `M ${x + r} ${y} L ${x + w - r} ${y} A ${r} ${r} 0 0 1 ${x + w} ${y + r} L ${x + w} ${y + h - r} A ${r} ${r} 0 0 1 ${x + w - r} ${y + h} L ${x + r} ${y + h} A ${r} ${r} 0 0 1 ${x} ${y + h - r} L ${x} ${y + r} A ${r} ${r} 0 0 1 ${x + r} ${y} Z`;
  } else {
    // Vertical segment
    return `M ${x + r} ${y} L ${x + w - r} ${y} A ${r} ${r} 0 0 1 ${x + w} ${y + r} L ${x + w} ${y + h - r} A ${r} ${r} 0 0 1 ${x + w - r} ${y + h} L ${x + r} ${y + h} A ${r} ${r} 0 0 1 ${x} ${y + h - r} L ${x} ${y + r} A ${r} ${r} 0 0 1 ${x + r} ${y} Z`;
  }
}

// 7-segment patterns: [a, b, c, d, e, f, g]
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
  const onColor = "#4a5a5a";
  const offColor = "#d8dcdd";

  // Calculate positions
  const hY = [1, DIGIT_H / 2 - SEG_W / 2, DIGIT_H - SEG_W - 1];
  const hX = SEG_W + GAP;

  const vTop = SEG_W + GAP;
  const vBot = vTop + V_SEG_H + SEG_W;
  const vLeftX = 1;
  const vRightX = DIGIT_W - SEG_W - 1;

  return (
    <svg width={DIGIT_W} height={DIGIT_H} viewBox={`0 0 ${DIGIT_W} ${DIGIT_H}`}>
      {/* a - top horizontal */}
      <path d={getSegmentPath('h', hX, hY[0], H_SEG_W, SEG_W)} fill={segs[0] ? onColor : offColor} />
      {/* b - top right vertical */}
      <path d={getSegmentPath('v', vRightX, vTop, SEG_W, V_SEG_H)} fill={segs[1] ? onColor : offColor} />
      {/* c - bottom right vertical */}
      <path d={getSegmentPath('v', vRightX, vBot, SEG_W, V_SEG_H)} fill={segs[2] ? onColor : offColor} />
      {/* d - bottom horizontal */}
      <path d={getSegmentPath('h', hX, hY[2], H_SEG_W, SEG_W)} fill={segs[3] ? onColor : offColor} />
      {/* e - bottom left vertical */}
      <path d={getSegmentPath('v', vLeftX, vBot, SEG_W, V_SEG_H)} fill={segs[4] ? onColor : offColor} />
      {/* f - top left vertical */}
      <path d={getSegmentPath('v', vLeftX, vTop, SEG_W, V_SEG_H)} fill={segs[5] ? onColor : offColor} />
      {/* g - middle horizontal */}
      <path d={getSegmentPath('h', hX, hY[1], H_SEG_W, SEG_W)} fill={segs[6] ? onColor : offColor} />
    </svg>
  );
}

function Colon() {
  const color = "#4a5a5a";
  return (
    <svg width="10" height={DIGIT_H} viewBox={`0 0 10 ${DIGIT_H}`}>
      <circle cx="5" cy={DIGIT_H * 0.33} r="2.5" fill={color} />
      <circle cx="5" cy={DIGIT_H * 0.67} r="2.5" fill={color} />
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
    <div className="widget-card p-5 flex items-center justify-center">
      <div
        className="flex items-center rounded-[20px] px-5 py-4"
        style={{
          background: "linear-gradient(180deg, #f0f2f3 0%, #e8eaeb 100%)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
          border: "1px solid rgba(255,255,255,0.6)",
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
