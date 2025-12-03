
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { haasProducts, type Product } from "@/data/haasProducts";

type FilterSectionProps = {
    title: string;
    options: string[];
};

const sortOptions = [
    "Top Sellers",
    "Price (Low to High)",
    "Price (High to Low)",
    "New Arrivals",
];

const drivers = ["Esteban Ocon", "Ollie Bearman"];

const departments = [
    "Collectibles & Memorabilia",
    "Headwear",
    "Home & Office",
    "Hoodies & Sweatshirts",
    "Jackets",
    "Polos",
    "T-Shirts",
];

const genders = ["Men", "Women", "Kids"];
const collections = ["Hot New Arrivals"];
const brands = ["LEGO", "New Era"];

function FilterSection({ title, options }: FilterSectionProps) {
    const [open, setOpen] = useState(true);
    const groupName = title.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="mb-4 border-b border-gray-200 pb-3">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between text-[13px] font-semibold"
            >
                <span>{title}</span>
                <span className="text-xs">{open ? "▴" : "▾"}</span>
            </button>

            {open && (
                <div className="mt-2 space-y-1">
                    {options.map((opt) => (
                        <label
                            key={opt}
                            className="flex items-center gap-2 text-sm text-gray-800"
                        >
                            <input
                                type="radio"
                                name={groupName}
                                className="h-3 w-3 rounded-full border-gray-400 text-black"
                            />
                            <span>{opt}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

const colourOptions = [
    { name: "Black", className: "bg-black" },
    { name: "No Color", className: "bg-white" },
    { name: "White", className: "bg-white" },
    { name: "Blue", className: "bg-blue-600" },
];

function ColourFilter() {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="mb-4 border-b border-gray-200 pb-3">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between text-[13px] font-semibold"
            >
                <span>Colour</span>
                <span className="text-xs">{open ? "▴" : "▾"}</span>
            </button>

            {open && (
                <div className="mt-2 space-y-1">
                    {colourOptions.map((c) => (
                        <button
                            key={c.name}
                            type="button"
                            onClick={() => setSelected(c.name)}
                            className="flex items-center gap-2 text-sm text-gray-800"
                        >
                            <span
                                className={`inline-flex h-4 w-4 items-center justify-center rounded-full border border-gray-400 ${selected === c.name ? "ring-2 ring-black" : ""
                                    }`}
                            >
                                <span
                                    className={`block h-3 w-3 rounded-full ${c.className}`}
                                />
                            </span>
                            <span>{c.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function HaasTeamwearPage() {
    const products: Product[] = haasProducts;

    return (
        <div className="bg-white">
            <div className="border-t border-gray-200" />
            <p className="py-2 text-center text-[11px] uppercase tracking-[0.15em] text-gray-700">
                UP TO 60% OFF SELECTED LINES{" "}
                <span className="font-semibold">Use code SALE60</span>
            </p>

            <div className="mx-auto max-w-[1500px] px-6 pb-12">
                <div className="flex gap-10">
                    <aside className="w-72 shrink-0 text-[13px] text-gray-900">
                        <div className="mb-4 border-b border-gray-200 pb-3">
                            <button
                                type="button"
                                className="flex w-full items-center justify-between text-[13px] font-semibold"
                            >
                                <span>Sort By</span>
                                <span className="text-xs">▾</span>
                            </button>
                            <div className="mt-2 space-y-1">
                                {sortOptions.map((opt) => (
                                    <label
                                        key={opt}
                                        className="flex items-center gap-2 text-sm text-gray-800"
                                    >
                                        <input
                                            type="radio"
                                            name="sort-by"
                                            className="h-3 w-3 rounded-full border-gray-400 text-black"
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <FilterSection title="Drivers" options={drivers} />
                        <FilterSection title="All Departments" options={departments} />
                        <FilterSection title="Gender/Age" options={genders} />
                        <FilterSection title="Popular Collections" options={collections} />
                        <FilterSection title="Featured Brands" options={brands} />
                        <ColourFilter />
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
                            <span>1 - 72 of 18</span>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {products.map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/teams/haas/${p.id}`}
                                    className="text-sm text-gray-900"
                                >
                                    <div className="bg-white">
                                        <Image
                                            src={p.image}
                                            alt={p.name}
                                            width={600}
                                            height={600}
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
