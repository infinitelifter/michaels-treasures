"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { photos } from "@/lib/site";

const GAP = 24;
const AUTO_ADVANCE_SECONDS = 4;
const MANUAL_HOLD_MS = 9000;

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const holdUntil = useRef(0);
  const hover = useRef(false);
  const [counter, setCounter] = useState(`01 / ${String(photos.collection.length).padStart(2, "0")}`);

  const step = () => {
    const track = trackRef.current;
    const slide = track?.querySelector<HTMLElement>("[data-slide]");
    return slide ? slide.getBoundingClientRect().width + GAP : 424;
  };

  const go = (dir: 1 | -1, manual: boolean) => {
    const track = trackRef.current;
    if (!track) return;
    if (manual) holdUntil.current = Date.now() + MANUAL_HOLD_MS;
    const s = step();
    const max = track.scrollWidth - track.clientWidth;
    let x = Math.round(track.scrollLeft / s) * s + dir * s;
    if (x > max + s / 2) x = 0; // past the end → loop to start
    else if (x < -s / 2) x = max; // before the start → loop to end
    track.scrollTo({ left: Math.max(0, Math.min(x, max)), behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const paintCounter = () => {
      const n = photos.collection.length;
      const i = Math.min(n, Math.round(track.scrollLeft / step()) + 1);
      const pad = (v: number) => String(v).padStart(2, "0");
      setCounter(`${pad(Math.max(1, i))} / ${pad(n)}`);
    };

    const hold = () => {
      holdUntil.current = Date.now() + MANUAL_HOLD_MS;
    };
    const onEnter = () => {
      hover.current = true;
    };
    const onLeave = () => {
      hover.current = false;
    };
    const onScroll = () => window.requestAnimationFrame(paintCounter);

    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);
    track.addEventListener("pointerdown", hold, { passive: true });
    track.addEventListener("wheel", hold, { passive: true });
    track.addEventListener("touchstart", hold, { passive: true });
    track.addEventListener("scroll", onScroll, { passive: true });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer: ReturnType<typeof setInterval> | undefined;
    if (!reduce) {
      timer = setInterval(() => {
        if (hover.current || Date.now() < holdUntil.current) return;
        if (document.hidden) return;
        const r = track.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        go(1, false);
      }, AUTO_ADVANCE_SECONDS * 1000);
    }
    paintCounter();

    return () => {
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
      track.removeEventListener("pointerdown", hold);
      track.removeEventListener("wheel", hold);
      track.removeEventListener("touchstart", hold);
      track.removeEventListener("scroll", onScroll);
      if (timer) clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="collection__head container">
        <p className="eyebrow eyebrow--dark" style={{ margin: 0 }}>
          Selected pieces · 2024–2026
        </p>
        <div className="collection__controls">
          <span className="collection__counter" aria-live="polite">
            {counter}
          </span>
          <div className="collection__arrows">
            <button
              className="car-btn"
              aria-label="Previous photograph"
              onClick={() => go(-1, true)}
            >
              ←
            </button>
            <button
              className="car-btn"
              aria-label="Next photograph"
              onClick={() => go(1, true)}
            >
              →
            </button>
          </div>
        </div>
      </div>
      <div className="collection__band">
        <div className="car" ref={trackRef}>
          {photos.collection.map((photo, i) => (
            <div className="car__slide" data-slide key={i}>
              <figure className="car__frame" style={{ margin: 0 }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 500px) 80vw, 400px"
                  loading="lazy"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
