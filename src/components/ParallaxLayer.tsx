"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  speed?: number; // 0.1 = slow, 0.5 = med, 1 = fast (negative = reverse)
  className?: string;
};

export default function ParallaxLayer({ children, speed = 0.2, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Only run on non-mobile for perf
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.parentElement?.getBoundingClientRect();
          if (!rect) { ticking = false; return; }
          const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
          el.style.transform = `translateY(${centerOffset * speed * -0.12}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
