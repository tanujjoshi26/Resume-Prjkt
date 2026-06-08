"use client";

import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let tx = 0, ty = 0, cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => {
      tx = (e.clientX - window.innerWidth  / 2) / window.innerWidth;
      ty = (e.clientY - window.innerHeight / 2) / window.innerHeight;
    };

    const tick = () => {
      cx += (tx - cx) * 0.04;
      cy += (ty - cy) * 0.04;
      if (ref1.current) ref1.current.style.transform = `translate(${cx * 80}px, ${cy * 60}px)`;
      if (ref2.current) ref2.current.style.transform = `translate(${-cx * 60}px, ${-cy * 50}px)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
      {/* lime-green glow — top left (matches the reference image gradient) */}
      <div ref={ref1} className="aurora-1 absolute"
        style={{
          top: "-120px", left: "-80px",
          width: "600px", height: "600px",
          background: "radial-gradient(ellipse at center, rgba(190,242,100,0.18) 0%, rgba(132,204,22,0.08) 45%, transparent 70%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
      />
      {/* subtle indigo — bottom right */}
      <div ref={ref2} className="aurora-2 absolute"
        style={{
          bottom: "-80px", right: "-80px",
          width: "500px", height: "500px",
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.08) 45%, transparent 70%)",
          filter: "blur(90px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
