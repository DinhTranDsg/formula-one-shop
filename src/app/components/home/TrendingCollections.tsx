"use client";
import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";
import { trendingCollections } from "@/data/trending";

export default function TrendingCollections() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };
    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="relative bg-white px-8 py-12">
      <h2 className="mb-6 text-lg text-black font-semibold">Trending Collections</h2>

      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-2 px-1 hide-scrollbar"
        >
          {trendingCollections.map((item) => (
            <div key={item.id} className="shrink-0 w-40 md:w-56 text-center snap-start">
              <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-200">
                <NextImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-black text-sm">{item.title}</p>
            </div>
          ))}
        </div>
        <button
          aria-label="Scroll trending left"
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow md:flex ${
            canScrollLeft ? "opacity-100" : "opacity-40 pointer-events-none"
          }`}
        >
          ‹
        </button>
        <button
          aria-label="Scroll trending right"
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 hidden h-10 w-10 translate-x-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow md:flex ${
            canScrollRight ? "opacity-100" : "opacity-40 pointer-events-none"
          }`}
        >
          ›
        </button>
      </div>
    </section>
  );
}