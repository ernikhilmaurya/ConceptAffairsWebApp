"use client";

import { useEffect, useRef } from "react";

export default function CursorFX() {
  const glowRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({ x: 0.5, y: 0.5 });
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      target.current.x = e.clientX / window.innerWidth;
      target.current.y = e.clientY / window.innerHeight;
    }
    window.addEventListener("mousemove", onMove);

    function tick() {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;

      const root = document.documentElement.style;
      root.setProperty("--cursor-x", `${current.current.x * 100}%`);
      root.setProperty("--cursor-y", `${current.current.y * 100}%`);
      root.setProperty("--cursor-px", `${(current.current.x - 0.5) * 2}`);
      root.setProperty("--cursor-py", `${(current.current.y - 0.5) * 2}`);

      raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background:
          "radial-gradient(560px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(253, 185, 19,0.10), transparent 60%)",
      }}
    />
  );
}
