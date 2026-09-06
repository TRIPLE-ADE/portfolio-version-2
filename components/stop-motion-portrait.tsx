"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FRAMES = ["/portrait-1.webp", "/portrait-2.webp"];
const SEQUENCE = [0, 1];

export function StopMotionPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [seqIndex, setSeqIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [loadedFrames, setLoadedFrames] = useState<boolean[]>(() => FRAMES.map(() => false));

  const isReady = loadedFrames.every(Boolean);
  const currentFrameIndex = SEQUENCE[seqIndex];

  const handleFrameSettled = (index: number) => {
    setLoadedFrames((prev) => {
      if (prev[index]) return prev;

      const next = [...prev];
      next[index] = true;

      return next;
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMotionPreference = () => {
      const shouldReduceMotion = mediaQuery.matches;

      setPrefersReducedMotion(shouldReduceMotion);

      // Always park on the canonical portrait when motion is disabled.
      if (shouldReduceMotion) {
        setSeqIndex(0);
      }
    };

    handleMotionPreference();

    mediaQuery.addEventListener("change", handleMotionPreference);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.4,
      },
    );

    const element = containerRef.current;

    if (element) {
      observer.observe(element);
    }

    const handleVisibilityChange = () => {
      setIsDocumentVisible(!document.hidden);
    };

    // Synchronize initial visibility state as well as future changes.
    handleVisibilityChange();

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();

      mediaQuery.removeEventListener("change", handleMotionPreference);

      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!isInView || !isDocumentVisible || prefersReducedMotion || !isReady) {
      return;
    }

    const intervalMs = isHovered ? 180 : 320;

    const timer = window.setInterval(() => {
      setSeqIndex((prev) => (prev + 1) % SEQUENCE.length);
    }, intervalMs);

    return () => {
      window.clearInterval(timer);
    };
  }, [isHovered, isInView, isDocumentVisible, isReady, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          setIsHovered(true);
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          setIsHovered(false);
        }
      }}
      className="relative aspect-4/5 overflow-hidden rounded-[1.2rem] bg-secondary select-none"
    >
      {FRAMES.map((src, index) => {
        const isBase = index === 0;
        const isActive = currentFrameIndex === index;

        return (
          <Image
            key={src}
            src={src}
            alt={isBase ? "Abdulrasheed Abdulsalam, frontend and mobile engineer" : ""}
            aria-hidden={isBase ? undefined : true}
            fill
            preload={isBase}
            loading={isBase ? undefined : "eager"}
            sizes="(max-width: 1024px) 90vw, 38vw"
            onLoad={() => handleFrameSettled(index)}
            onError={() => handleFrameSettled(index)}
            className={`object-cover object-top transition-opacity duration-75 ${
              isBase || (isActive && isReady) ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />
        );
      })}

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/30 to-transparent p-6 pt-24 text-white">
        <p className="label text-white/70">Engineering focus</p>

        <p className="mt-2 text-xl font-bold">Reliable fintech, web, and mobile products.</p>
      </div>
    </div>
  );
}
