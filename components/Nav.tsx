"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#collection", label: "Collection" },
  { href: "#selection", label: "Selection" },
  { href: "#about", label: "About" },
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);
  const spyRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const paint = () => {
      ticking = false;
      const y = window.scrollY;
      setScrolled(y > window.innerHeight - 90);
      if (y > 80 && y - lastY > 8) setHidden(true);
      else if (lastY - y > 8 || y < 80) setHidden(false);
      lastY = y;

      // scroll spy — move the gold underline to the active section's link
      let active: string | null = null;
      document.querySelectorAll<HTMLElement>("[data-section]").forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= 140 && r.bottom > 140) active = s.dataset.section ?? null;
      });
      const spy = spyRef.current;
      const wrap = linksRef.current;
      if (spy && wrap) {
        const link = active
          ? wrap.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`)
          : null;
        if (link) {
          spy.style.left = `${link.offsetLeft}px`;
          spy.style.width = `${link.offsetWidth}px`;
        } else {
          spy.style.width = "0px";
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(paint);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    paint();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`nav ${scrolled ? "nav--scrolled" : ""} ${
          hidden && !menuOpen ? "nav--hidden" : ""
        }`}
        aria-label="Main navigation"
      >
        <div className="nav__inner">
          <div className="nav__links" ref={linksRef}>
            {LINKS.map((l) => (
              <a key={l.href} className="nav__link" href={l.href}>
                {l.label}
              </a>
            ))}
            <span className="nav__spy" ref={spyRef} />
          </div>
          <a className="nav__wordmark" href="#home">
            {site.name}
          </a>
          <div className="nav__right">
            <a className="nav__link" href="#contact">
              Get in Touch
            </a>
            <a
              className="nav__link nav__link--framed"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <button
            className="nav__burger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`menu ${menuOpen ? "menu--open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu__bar">
          <span className="menu__wordmark">{site.name}</span>
          <button className="menu__close" onClick={() => setMenuOpen(false)}>
            Close
          </button>
        </div>
        <div className="menu__body">
          {[...LINKS, { href: "#contact", label: "Get in Touch" }].map((l, i) => (
            <a
              key={l.href}
              className="menu__link"
              href={l.href}
              style={{ transitionDelay: menuOpen ? `${120 + i * 60}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="menu__rule" />
          <a
            className="menu__ig"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram · {site.instagramHandle}
          </a>
        </div>
      </div>
    </>
  );
}
