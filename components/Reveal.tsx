"use client";

import {
  useLayoutEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Fade-up on scroll. Content is rendered visible on the server (so crawlers
 * and no-JS visitors always see it); the hide-then-reveal is applied on the
 * client only for elements still below the fold, mirroring the original
 * design's behaviour. Respects prefers-reduced-motion via CSS.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.classList.add("reveal--pending");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add("reveal--in");
          en.target.classList.remove("reveal--pending");
          io.unobserve(en.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
