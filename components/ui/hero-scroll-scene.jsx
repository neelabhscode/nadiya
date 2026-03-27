"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Component as LiquidGlassDock } from "./liquid-glass";

gsap.registerPlugin(ScrollTrigger);

export function HeroScrollScene({ heroEffects, heroPosition }) {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const spacerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
      autoRaf: false,
      anchors: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    function update(time) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      gsap.to(heroRef.current, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: spacerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);

    return () => {
      context.revert();
      gsap.ticker.remove(update);
      lenis.destroy();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div ref={rootRef}>
      <div
        ref={heroRef}
        id="hero"
        className="hero-wrapper fixed inset-x-0 top-0 z-20 h-dvh overflow-hidden bg-black"
      >
        <LiquidGlassDock />

        <div className="absolute inset-0 md:hidden">
          <Image
            src="/hero.jpg"
            alt="Hero background"
            fill
            priority
            className="hero-image object-cover"
            style={{
              objectPosition: `${heroPosition.mobileX}% ${heroPosition.mobileY}%`,
              transform: `scale(${heroPosition.mobileZoom})`,
              filter: `grayscale(${heroEffects.grayscale}%)`,
            }}
          />
        </div>

        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/hero.jpg"
            alt="Hero background"
            fill
            priority
            className="hero-image object-cover"
            style={{
              objectPosition: `${heroPosition.desktopX}% ${heroPosition.desktopY}%`,
              transform: `scale(${heroPosition.desktopZoom})`,
              filter: `grayscale(${heroEffects.grayscale}%)`,
            }}
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${heroEffects.blur}px)`,
            WebkitBackdropFilter: `blur(${heroEffects.blur}px)`,
            maskImage:
              "radial-gradient(circle at center, transparent 44%, black 100%)",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            boxShadow: `inset 0 0 220px rgba(0, 0, 0, ${heroEffects.shadow / 100})`,
          }}
        />
      </div>

      <div ref={spacerRef} className="spacer h-dvh" />
    </div>
  );
}
