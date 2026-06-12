"use client";

import { useEffect, useState } from "react";

const LINES = [
  { text: "$ git push origin main",         delay: 0,    color: "lime" },
  { text: "→ Triggering CI/CD pipeline...", delay: 800,  color: "dim" },
  { text: "",                               delay: 1200, color: "dim" },
  { text: "[1/5] Installing dependencies", delay: 1400,  color: "dim" },
  { text: "✓ npm install complete",         delay: 2200,  color: "green" },
  { text: "",                               delay: 2600,  color: "dim" },
  { text: "[2/5] Running tests",           delay: 2800,  color: "dim" },
  { text: "  ✓ unit tests passed (48/48)", delay: 3500,  color: "green" },
  { text: "  ✓ integration tests passed",  delay: 4000,  color: "green" },
  { text: "",                               delay: 4400,  color: "dim" },
  { text: "[3/5] Building Docker image",   delay: 4600,  color: "dim" },
  { text: "  → docker build -t app:latest",delay: 5000,  color: "muted" },
  { text: "✓ Image built successfully",    delay: 6200,  color: "green" },
  { text: "",                               delay: 6600,  color: "dim" },
  { text: "[4/5] Pushing to ECR",          delay: 6800,  color: "dim" },
  { text: "✓ Pushed → 123456.ecr.aws/app", delay: 7800,  color: "green" },
  { text: "",                               delay: 8200,  color: "dim" },
  { text: "[5/5] Deploying to EC2",        delay: 8400,  color: "dim" },
  { text: "  → Rolling update in progress",delay: 8900,  color: "muted" },
  { text: "  ✓ 3/3 instances healthy",     delay: 9800,  color: "green" },
  { text: "",                               delay: 10200, color: "dim" },
  { text: "✓ Deployed in 11.2s",           delay: 10400, color: "lime" },
  { text: "→ Live at: app.tanujjoshi.dev", delay: 10900, color: "lime" },
];

type LineColor = "lime" | "green" | "dim" | "muted";

const colorMap: Record<LineColor, string> = {
  lime:  "text-[#bef264]",
  green: "text-[#86efac]",
  dim:   "text-gray-400",
  muted: "text-gray-600",
};

export default function SplineScene() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);
  const [cycle, setCycle] = useState(0);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorOn(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Type lines one by one, then restart after pause
  useEffect(() => {
    setVisibleCount(0);
    const timers: ReturnType<typeof setTimeout>[] = [];

    LINES.forEach((line, i) => {
      const t = setTimeout(() => setVisibleCount(i + 1), line.delay);
      timers.push(t);
    });

    // Restart after last line + 3s pause
    const last = LINES[LINES.length - 1].delay + 3000;
    const restart = setTimeout(() => setCycle(c => c + 1), last);
    timers.push(restart);

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="w-full h-full flex flex-col font-mono text-[11px] leading-[1.7] select-none overflow-hidden">
      {/* Terminal header bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.04] border-b border-white/[0.06] rounded-t-xl shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
        <span className="ml-auto text-[10px] text-gray-700 tracking-wider">
          tanuj@devops ~ pipeline
        </span>
      </div>

      {/* Terminal body */}
      <div className="flex-1 px-4 py-3 overflow-hidden rounded-b-xl bg-white/[0.02] border border-t-0 border-white/[0.06]">
        {LINES.slice(0, visibleCount).map((line, i) => (
          <div
            key={`${cycle}-${i}`}
            className={`${colorMap[line.color as LineColor]} whitespace-pre`}
          >
            {line.text}
            {/* Cursor only on last visible line */}
            {i === visibleCount - 1 && visibleCount < LINES.length && (
              <span
                className="inline-block w-[6px] h-[11px] bg-[#bef264] ml-0.5 align-middle"
                style={{ opacity: cursorOn ? 1 : 0 }}
              />
            )}
          </div>
        ))}

        {/* Idle cursor after all lines */}
        {visibleCount >= LINES.length && (
          <div className="text-[#bef264] mt-1">
            $ <span
              className="inline-block w-[6px] h-[11px] bg-[#bef264] ml-0.5 align-middle"
              style={{ opacity: cursorOn ? 1 : 0 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
