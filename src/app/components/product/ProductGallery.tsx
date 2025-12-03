
"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
    images: string[];
    alt: string;
};

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
    const [index, setIndex] = useState<number>(0);

    const goPrev = () => {
        setIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const goNext = () => {
        setIndex((prev) =>
            prev < images.length - 1 ? prev + 1 : prev
        );
    };

    return (
        <div className="flex gap-4">

            <div className="flex flex-col gap-3">
                {images.map((src: string, i: number) => (
                    <button
                        key={src + i}
                        type="button"
                        onClick={() => setIndex(i)}
                        className={`border ${i === index ? "border-black" : "border-gray-200"
                            }`}
                    >
                        <div className="h-20 w-20 overflow-hidden bg-white">
                            <Image
                                src={src}
                                alt={`${alt} thumbnail ${i + 1}`}
                                width={80}
                                height={80}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </button>
                ))}
            </div>

            <div className="relative flex-1">
                <div className="bg-white">
                    <Image
                        src={images[index]}
                        alt={alt}
                        width={900}
                        height={900}
                        className="h-[560px] w-full object-contain"
                    />
                </div>
                <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-gray-300 bg-white px-2 py-1 text-xl"
                >
                    ‹
                </button>
                <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-gray-300 bg-white px-2 py-1 text-xl"
                >
                    ›
                </button>
            </div>
        </div>
    );
}
