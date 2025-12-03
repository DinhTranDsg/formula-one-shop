
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    formulaOneProducts,
    type FormulaOneProduct,
} from "@/data/formulaOneCollectionProducts";

type Product = FormulaOneProduct;

const departments = [
    "Accessories",
    "Auto Accessories",
    "Backpacks & Bags",
    "Collectibles & Memorabilia",
    "Footwear",
    "Headwear",
    "Home & Office",
    "Hoodies & Sweatshirts",
    "Jackets",
    "Pajamas & Underwear",
    "Pants",
    "Polos",
    "T-Shirts",
    "Trading Cards",
];

const genders = ["Men", "Women", "Kids", "Baby"];
const popularCollections = [
    "Essentials",
    "F1 75 Anniversary",
    "F1 Graphics",
    "F1 Moments",
    "Hot New Arrivals",
    "Lifestyle",
    "Miami",
    "Micro Moments",
    "Tech Collection",
];
const featuredBrands = ["LEGO", "Mitchell & Ness"];
const colours = [
    "Black",
    "White",
    "Red",
    "Grey",
    "Cream",
    "Blue",
    "Pink",
    "Green",
    "Brown",
    "Burgundy",
    "Coral",
    "Light Blue",
    "Light Brown",
    "Light Pink",
    "Orange",
    "Purple",
    "Silver",
    "Teal",
    "Gold",
    "Khaki",
    "Olive",
];

type FilterRowProps = {
    label: string;
    name: string;
};

function FilterRow({ label, name }: FilterRowProps) {
    return (
        <label className="flex items-center gap-2 text-sm text-gray-800">
            <input
                type="checkbox"
                name={name}
                className="
          h-3 w-3
          appearance-none
          rounded-full
          border border-gray-400
          checked:bg-black checked:border-black
          checked:ring-1 checked:ring-black
          focus:outline-none focus:ring-1 focus:ring-black
        "
            />
            <span>{label}</span>
        </label>
    );
}

type FilterSectionProps = {
    title: string;
    options: string[];
    groupName: string;
    defaultOpen?: boolean;
};

function FilterSection({
    title,
    options,
    groupName,
    defaultOpen = true,
}: FilterSectionProps) {
    const [open, setOpen] = useState(defaultOpen);

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
                        <FilterRow key={opt} label={opt} name={groupName} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function FormulaOneCollectionPage() {
    const products = formulaOneProducts;

    return (
        <div className="bg-white">
            <div className="border-t border-gray-200" />
            <p className="py-2 text-center text-[11px] uppercase tracking-[0.15em] text-gray-700">
                UP TO 60% OFF SELECTED LINES{" "}
                <span className="font-semibold">Use code SALE60</span>
            </p>

            <div className="mx-auto max-w-7xl px-6 pb-14">
                <div className="mb-4 flex items-center justify-between text-xs text-gray-700">
                    <div className="flex items-center gap-6">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-wide">
                                Sort By
                            </p>
                            <p className="mt-1 text-sm">Top Sellers</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">72 items</span>
                            <select className="border border-gray-300 bg-white px-3 py-1 text-xs">
                                <option>72 Items</option>
                                <option>48 Items</option>
                                <option>24 Items</option>
                            </select>
                        </div>
                    </div>

                    <span>1 - 72 of 269</span>
                </div>

                {/* BODY: FILTER + PRODUCT */}
                <div className="flex gap-10">
                    {/* FILTER LEFT */}
                    <aside className="w-72 shrink-0 text-[13px] text-gray-900">
                        <FilterSection
                            title="All Departments"
                            options={departments}
                            groupName="departments"
                        />

                        <FilterSection
                            title="Gender/Age"
                            options={genders}
                            groupName="genders"
                        />

                        <FilterSection
                            title="Popular Collections"
                            options={popularCollections}
                            groupName="collections"
                        />

                        <FilterSection
                            title="Featured Brands"
                            options={featuredBrands}
                            groupName="brands"
                        />

                        <FilterSection
                            title="Colour"
                            options={colours}
                            groupName="colour"
                        />
                    </aside>

                    <section className="flex-1">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {products.map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/teams/formula-one/${p.id}`}
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
