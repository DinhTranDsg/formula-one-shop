// src/app/teams/ferrari/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    ferrariProducts,
    type Product,
} from "@/data/ferrariProducts";

const sortOptions = [
    "Top Sellers",
    "Price (Low to High)",
    "Price (High to Low)",
    "New Arrivals",
];

const drivers = ["Charles Leclerc", "Lewis Hamilton", "Michael Schumacher"];

const departments = [
    "Accessories",
    "Auto Accessories",
    "Backpacks & Bags",
    "Collectibles & Memorabilia",
    "Headwear",
    "Home & Office",
    "Hoodies & Sweatshirts",
    "Jackets",
    "Jerseys",
    "Lawn & Garden",
    "Polos",
    "Shorts",
    "T-Shirts",
    "Swim & Beach",
    "Pants",
];

const genders = ["Men", "Women", "Kids"];
const collections = ["Hot New Arrivals", "Miami"];
const personalised = ["Personalised"];
const brands = ["LEGO", "Puma"];

const colours = [
    "Black",
    "No Color",
    "Orange",
    "White",
    "Cream",
    "Grey",
    "Green",
    "Purple",
    "Blue",
    "Camo",
    "Light Pink",
    "Navy",
    "Neon Green",
    "Pink",
    "Red",
];

function getColourDotClass(value: string): string {
    const v = value.toLowerCase();
    switch (v) {
        case "black":
            return "bg-black";
        case "no color":
            return "bg-gray-200";
        case "white":
            return "bg-white";
        case "orange":
            return "bg-orange-500";
        case "cream":
            return "bg-yellow-100";
        case "grey":
            return "bg-gray-400";
        case "green":
            return "bg-green-600";
        case "purple":
            return "bg-purple-600";
        case "blue":
            return "bg-blue-600";
        case "camo":
            return "bg-amber-900";
        case "light pink":
            return "bg-pink-200";
        case "navy":
            return "bg-blue-900";
        case "neon green":
            return "bg-lime-400";
        case "pink":
            return "bg-pink-500";
        case "red":
            return "bg-red-600";
        default:
            return "bg-gray-200";
    }
}

function FilterSection({
    title,
    options,
    defaultOpen = true,
}: {
    title: string;
    options: string[];
    defaultOpen?: boolean;
}) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const name = title.toLowerCase().replace(/\s+/g, "-");
    const isColour = title === "Colour";

    return (
        <div className="mb-5 border-b border-gray-200 pb-4">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex w-full items-center justify-between text-[13px] font-semibold"
            >
                <span>{title}</span>
                <span className="text-xs">{isOpen ? "▴" : "▾"}</span>
            </button>

            {isOpen && (
                <div className="mt-2 space-y-1">
                    {options.map((opt: string) => (
                        <label
                            key={opt}
                            className="flex items-center gap-2 text-sm text-gray-800"
                        >
                            <input
                                type="radio"
                                name={name}
                                className="h-3 w-3 rounded-full border-gray-400 text-black"
                            />
                            {isColour && (
                                <span
                                    className={`h-4 w-4 rounded-full border border-gray-400 ${getColourDotClass(
                                        opt,
                                    )}`}
                                />
                            )}
                            <span>{opt}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function FerrariTeamwearPage() {
    return (
        <div className="bg-white">
            <div className="border-t border-gray-200" />
            <p className="py-2 text-center text-[11px] uppercase tracking-[0.15em] text-gray-700">
                UP TO 60% OFF SELECTED LINES{" "}
                <span className="font-semibold">Use code SALE60</span>
            </p>

            <div className="mx-auto max-w-[1500px] px-6 pb-12">
                {/* HERO giống Red Bull/Mercedes */}
                <div className="relative mb-8 bg-black">
                    <Image
                        src="https://f1store.formula1.com/content/ws/all/58db5d4c-57ea-49c7-be3e-2de30b34f0cf__1370X450.png"
                        alt="Ferrari hero"
                        width={1370}
                        height={450}
                        className="h-[360px] w-full object-cover"
                    />

                    <div className="absolute bottom-10 left-10 text-white">
                        <h1 className="text-4xl font-semibold leading-tight">
                            Ferrari
                            <br />
                            Teamwear
                        </h1>
                    </div>
                </div>

                {/* filters + products */}
                <div className="flex gap-6">
                    <aside className="w-72 shrink-0 text-[13px] text-gray-900">
                        <FilterSection title="Sort By" options={sortOptions} />
                        <FilterSection title="Drivers" options={drivers} />
                        <FilterSection title="All Departments" options={departments} />
                        <FilterSection title="Gender/Age" options={genders} />
                        <FilterSection title="Popular Collections" options={collections} />
                        <FilterSection
                            title="Personalised Products"
                            options={personalised}
                            defaultOpen={false}
                        />
                        <FilterSection title="Featured Brands" options={brands} />
                        <FilterSection title="Colour" options={colours} />
                    </aside>

                    <section className="flex-1">
                        <div className="mb-4 flex items-center justify-between text-xs text-gray-700">
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-medium">72 items</span>
                                <select className="border border-gray-300 bg-white px-3 py-1 text-xs">
                                    <option>72 Items</option>
                                    <option>48 Items</option>
                                    <option>24 Items</option>
                                </select>
                            </div>
                            <span>1 - 72 of 109</span>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {ferrariProducts.map((p: Product) => (
                                <Link
                                    key={p.id}
                                    href={`/teams/ferrari/${p.id}`}
                                    className="text-sm text-gray-900"
                                >
                                    <div className="bg-white">
                                        <Image
                                            src={p.image}
                                            alt={p.name}
                                            width={532}
                                            height={532}
                                            className="h-80 w-full object-contain"
                                        />
                                    </div>
                                    <h3 className="mt-3 text-sm">{p.name}</h3>
                                    {p.note && (
                                        <p className="mt-1 text-xs text-gray-500">{p.note}</p>
                                    )}
                                    <div className="mt-1 text-sm">
                                        <span className="font-medium">{p.price}</span>
                                        {p.oldPrice && (
                                            <span className="ml-2 text-xs text-gray-500 line-through">
                                                {p.oldPrice}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
