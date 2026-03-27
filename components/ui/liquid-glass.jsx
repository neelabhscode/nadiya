"use client";

import React from "react";
import { House, Images, Mail, UserRound } from "lucide-react";

function GlassFilter() {
  return (
    <svg aria-hidden="true" className="hidden">
      <filter
        id="glass-distortion"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.001 0.005"
          numOctaves="1"
          seed="17"
          result="turbulence"
        />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
        <feSpecularLighting
          in="softMap"
          surfaceScale="5"
          specularConstant="1"
          specularExponent="100"
          lightingColor="white"
          result="specLight"
        >
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>
        <feComposite
          in="specLight"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="litImage"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="160"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}

function GlassEffect({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/20 ${className}`}
      style={{
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.22)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[inherit]"
        style={{
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[inherit] bg-[rgba(255,255,255,0.18)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[inherit] shadow-[inset_1px_1px_0_rgba(255,255,255,0.45),inset_-1px_-1px_0_rgba(255,255,255,0.18)]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function Component({ style, labels }) {
  const dockIcons = [
    { label: labels.home, href: "#", icon: House },
    { label: labels.about, href: "#about-me", icon: UserRound },
    { label: labels.gallery, href: "#gallery", icon: Images },
    { label: labels.contact, href: "#contact", icon: Mail },
  ];

  return (
    <div
      className="pointer-events-none fixed left-3 top-1/2 z-50 hidden -translate-y-1/2 md:block lg:left-5"
      style={style}
    >
      <GlassFilter />

      <GlassEffect className="pointer-events-auto p-2">
        <nav aria-label="Dock">
          <ul className="flex flex-col items-center gap-[38px]">
            {dockIcons.map((icon) => (
              <li key={icon.label}>
                <a
                  href={icon.href}
                  aria-label={icon.label}
                  className="group flex size-14 items-center justify-center text-white transition-transform duration-200 ease-out hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <icon.icon className="size-5" strokeWidth={2} />
                  <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-full bg-black/65 px-3 py-1 text-xs font-medium tracking-[0.08em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {icon.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </GlassEffect>
    </div>
  );
}
