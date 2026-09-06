"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const FRAMES = ["/portrait-1.webp", "/portrait-2.webp", "/portrait-3.webp", "/portrait-4.webp"];

// Ping-pong sequence creates a smooth oscillating motion without sudden jump cuts
const SEQUENCE = [0, 1, 2, 3, 2, 1];

export function StopMotionPortrait() {
  const [seqIndex, setSeqIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    // Pause animation when outside viewport to conserve CPU and battery
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.9 },
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    // Faster frame rate on hover (180ms), relaxed stop-motion cadence at rest (320ms)
    const intervalMs = isHovered ? 180 : 320;

    const timer = setInterval(() => {
      setSeqIndex((prev) => (prev + 1) % SEQUENCE.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isInView, isHovered]);

  const currentFrameIndex = SEQUENCE[seqIndex];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-4/5 overflow-hidden rounded-[1.2rem] bg-secondary select-none"
    >
      {FRAMES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Abdulrasheed Abdulsalam, frontend and mobile engineer"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 38vw"
          className={`object-cover object-top transition-opacity duration-150 ${
            currentFrameIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}

      {/* Overlay caption */}
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/30 to-transparent p-6 pt-24 text-white">
        <p className="label text-white/70">Engineering focus</p>
        <p className="mt-2 text-xl font-bold">Reliable fintech, web, and mobile products.</p>
      </div>
    </div>
  );
}
