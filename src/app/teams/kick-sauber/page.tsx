// src/app/teams/kick-sauber/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    kickSauberProducts,
    type Product,
} from "@/data/kickSauberProducts";

const sortOptions = [
    "Top Sellers",
    "Price (Low to High)",
    "Price (High to Low)",
    "New Arrivals",
];

const drivers = ["Gabriel Bortoleto", "Nico Hulkenberg", "Valtteri Bottas"];

const departments = [
    "Collectibles & Memorabilia",
    "Headwear",
    "Home & Office",
    "Hoodies & Sweatshirts",
    "Polos",
    "T-Shirts",
];

const genders = ["Men", "Women"];

const collections = ["Hot New Arrivals"];

const brands = ["LEGO"];

const colours = ["No Color", "Black"];

// helper màu Colour
function getColourDotClass(value: string): string {
    const v = value.toLowerCase();
    switch (v) {
        case "no color":
            return "bg-white";
        case "black":
            return "bg-black";
        default:
            return "bg-gray-200";
    }
}

// Filter chung
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
                    {options.map((opt) => (
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
                                        opt
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

export default function KickSauberTeamwearPage() {
    const products: Product[] = kickSauberProducts;

    return (
        <div className="bg-white">
            {/* dòng sale trên cùng */}
            <div className="border-t border-gray-200" />
            <p className="py-2 text-center text-[11px] uppercase tracking-[0.15em] text-gray-700">
                UP TO 60% OFF SELECTED LINES{" "}
                <span className="font-semibold">Use code SALE60</span>
            </p>

            <div className="mx-auto max-w-[1500px] px-6 pb-12">
                {/* (Nếu muốn hero banner cho Kick Sauber thì thêm ở đây giống các team khác) */}

                {/* BODY: filter + products */}
                <div className="flex gap-6">
                    {/* Filter bên trái */}
                    <aside className="w-72 shrink-0 text-[13px] text-gray-900">
                        <FilterSection title="Sort By" options={sortOptions} />
                        <FilterSection title="Drivers" options={drivers} />
                        <FilterSection title="All Departments" options={departments} />
                        <FilterSection title="Gender/Age" options={genders} />
                        <FilterSection title="Popular Collections" options={collections} />
                        <FilterSection title="Featured Brands" options={brands} />
                        <FilterSection title="Colour" options={colours} />
                    </aside>

                    {/* Products bên phải */}
                    <section className="flex-1">
                        <div className="mb-4 flex items-center justify-between text-xs text-gray-700">
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-medium">14 items</span>
                                <select className="border border-gray-300 bg-white px-3 py-1 text-xs">
                                    <option>72 Items</option>
                                    <option>48 Items</option>
                                    <option>24 Items</option>
                                </select>
                            </div>
                            <span>1 - 14 of 14</span>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {products.map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/teams/kick-sauber/${p.id}`}
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
                                        <p className="mt-1 text-xs font-medium text-red-600">
                                            {p.note}
                                        </p>
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
