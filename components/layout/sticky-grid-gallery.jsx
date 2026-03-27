"use client";

import { useEffect, useMemo, useState } from "react";
import ThreeDHoverGallery from "@/components/ui/3d-hover-gallery";

const galleryImages = [
  "/WhatsApp%20Image%202026-03-09%20at%2020.05.05.jpeg",
  "/WhatsApp%20Image%202026-03-09%20at%2020.05.06.jpeg",
  "/WhatsApp%20Image%202026-03-09%20at%2020.16.20.jpeg",
  "/WhatsApp%20Image%202026-03-09%20at%2020.16.27.jpeg",
  "/WhatsApp%20Image%202026-03-09%20at%2022.36.05.jpeg",
  "/WhatsApp%20Image%202026-03-25%20at%2023.45.49.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.28.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.29.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.33.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.34.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.35.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.36.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.37.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.38.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.39.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.40.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.41.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.42.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.43.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.44.jpeg",
  "/WhatsApp%20Image%202026-03-26%20at%2002.41.45.jpeg",
];

export function StickyGridGallery({ style }) {
  const baseImages = useMemo(() => galleryImages.slice(0, 12), []);
  const [images, setImages] = useState(baseImages);

  useEffect(() => {
    const shuffled = [...galleryImages];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    setImages(shuffled.slice(0, 12));
  }, []);

  return (
    <section id="gallery" className="relative z-30 bg-black py-16 sm:py-24" style={style}>
      <ThreeDHoverGallery
        images={images}
        className="bg-transparent px-3"
        itemWidth={9}
        itemHeight={14}
        activeWidth={34}
        perspective={45}
        hoverScale={10}
        gap={0.8}
        autoPlay={false}
      />
    </section>
  );
}
