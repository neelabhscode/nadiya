"use client";

import { useMemo, useRef, useState } from "react";
import { Container } from "../components/layout/container";
import { ScrollScene } from "../components/layout/scroll-scene";
import { Section } from "../components/layout/section";
import { StickyGridGallery } from "../components/layout/sticky-grid-gallery";
import { LanguageToggle } from "../components/ui/language-toggle";
import { Component as LiquidGlassDock } from "../components/ui/liquid-glass";
import Image from "next/image";
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import aboutLayout from "../lib/about-layout.json";
import heroEffects from "../lib/hero-effects.json";
import heroPosition from "../lib/hero-position.json";
export default function HomePage() {
  const [isUkr, setIsUkr] = useState(false);
  const heroSpacerRef = useRef(null);

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroSpacerRef,
    offset: ["start start", "end start"],
  });

  const heroSoftBlur = useTransform(heroScrollProgress, [0, 1], [0, 12]);
  const heroFilter = useMotionTemplate`grayscale(${heroEffects.grayscale}%) blur(${heroSoftBlur}px)`;

  const copy = useMemo(
    () =>
      isUkr
        ? {
            dock: {
              home: "ГОЛОВНА",
              about: "ПРО МЕНЕ",
              gallery: "ГАЛЕРЕЯ",
              contact: "КОНТАКТИ",
            },
            aboutTitle: "Надія.",
            aboutParagraphs: [
              "Я людина, яка обирає себе за будь-яких обставин, і саме цей вибір визначає життя, яке я будую.",
              "Я проживаю світ глибоко й чутливо, і мене тягне створювати красу та сенс усюди, де це можливо. Свобода, любов і незалежність для мене не є компромісом, це опори, які я вчуся тримати разом.",
              "Водночас я дуже ціную зв’язок, той, що є чесним, присутнім і по-справжньому відчутним.",
            ],
            gallery: "ГАЛЕРЕЯ",
            contact: "КОНТАКТИ",
            grid: "Сітка",
          }
        : {
            dock: {
              home: "HOME",
              about: "ABOUT ME",
              gallery: "GALLERY",
              contact: "CONTACT",
            },
            aboutTitle: "Nadiya.",
            aboutParagraphs: [
              "I am someone who chooses herself in every circumstance, and that choice defines the life I’m building.",
              "I experience the world with depth and sensitivity, and I’m drawn to creating beauty and meaning wherever I can. Freedom, love, and independence are not trade-offs for me, they are pillars I’m learning to hold together.",
              "At the same time, I deeply value connection, the kind that is honest, present, and truly felt.",
            ],
            gallery: "GALLERY",
            contact: "CONTACT",
            grid: "Grid",
          },
    [isUkr]
  );

  return (
    <main>
      <LiquidGlassDock labels={copy.dock} />
      <div className="fixed right-4 top-4 z-[80] sm:right-6 sm:top-6">
        <LanguageToggle isUkr={isUkr} onToggle={() => setIsUkr((current) => !current)} />
      </div>

      <div
        id="hero"
        className="fixed inset-0 z-10 h-dvh overflow-hidden bg-black"
      >
        <motion.div className="absolute inset-0" style={{ filter: heroFilter }}>
          <div className="absolute inset-0 md:hidden">
            <Image
              src="/hero.jpg"
              alt="Hero background"
              fill
              priority
              className="object-cover"
              style={{
                objectPosition: `${heroPosition.mobileX}% ${heroPosition.mobileY}%`,
                transform: `scale(${heroPosition.mobileZoom})`,
              }}
            />
          </div>

          <div className="absolute inset-0 hidden md:block">
            <Image
              src="/hero.jpg"
              alt="Hero background"
              fill
              priority
              className="object-cover"
              style={{
                objectPosition: `${heroPosition.desktopX}% ${heroPosition.desktopY}%`,
                transform: `scale(${heroPosition.desktopZoom})`,
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
        </motion.div>
      </div>

      <div className="relative z-[12] isolate">
        <div ref={heroSpacerRef} aria-hidden="true" className="pointer-events-none h-[200vh]" />

        <ScrollScene
          id="about-me"
          z={20}
          runwayVh={200}
          className="bg-white text-stone-950"
        >
          <div className="h-full">
            <Container className="flex h-full items-center">
              <div
                className="relative z-10 w-full"
                style={{
                  width: `min(100%, ${aboutLayout.contentWidth}rem)`,
                  marginLeft: `${aboutLayout.offsetX}px`,
                  transform: `translateY(${aboutLayout.offsetY}px)`,
                  textAlign: aboutLayout.textAlign,
                }}
              >
                <h2 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
                  {copy.aboutTitle}
                </h2>
                <div
                  className="max-w-2xl text-base leading-7 text-stone-700 sm:text-lg"
                  style={{ marginTop: `${aboutLayout.headingGap}px` }}
                >
                  <div
                    style={{ display: "grid", gap: `${aboutLayout.paragraphGap}px` }}
                  >
                    {copy.aboutParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </ScrollScene>

        <StickyGridGallery />

        <div className="relative z-40">
        <Section
          id="contact"
          className="relative h-[clamp(120px,24vw,360px)] overflow-hidden bg-black text-white"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-4vw] left-1/2 w-[140vw] -translate-x-1/2 select-none text-center text-[30vw] font-medium lowercase leading-[0.8] tracking-[-0.04em] text-[#b8b8bc]"
          >
            nadiya
          </div>
        </Section>
        </div>
      </div>
    </main>
  );
}
