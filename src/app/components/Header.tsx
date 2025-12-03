"use client";

import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [query, setQuery] = useState("");

    return (
        <header className="w-full bg-white">
            <div className="w-full bg-gray-50 text-xs text-gray-600 py-2 px-6 flex justify-between">
                <span>SIGN UP & SAVE 15%</span>
                <div className="flex items-center gap-4">
                    <Link href="#">Track Order</Link>
                    <Link href="#">Help</Link>
                    <Link href="#">My Account</Link>
                    <span>Language ▾</span>
                    <span>GBP £ ▾</span>
                    <ShoppingCart className="w-4 h-4 cursor-pointer" />
                </div>
            </div>

            <div className="w-full border-b">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
                    <div className="flex items-center gap-3">
                        <Image
                            src="https://f1store.formula1.com/content/ws/all/437d580b-44bd-42b1-9171-a5edc3e9c066.svg"
                            alt="F1 Store"
                            width={140}
                            height={60}
                            className="object-contain"
                        />
                        <div className="flex flex-col leading-tight">
                            <span className="text-3xl font-bold">Store</span> {/* to chữ hơn */}
                            <span className="text-[11px] text-gray-500 mt-0.5">
                                A Fanatics Experience
                            </span>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="flex items-center border rounded-full px-4 py-2 w-full max-w-2xl">
                            <Search className="text-gray-400 mr-2" size={18} />
                            <input
                                type="text"
                                placeholder="What can we help you find?"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-1 outline-none text-sm"
                            />
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Image
                            src="https://f1store.formula1.com/content/ws/all/dc91637d-3f73-47db-ae15-22ff6eafc0a7__1440X1116.png"
                            alt="AMEX"
                            width={70}
                            height={50}
                            className="object-contain"
                        />
                    </div>
                </div>

                <nav className="border-t border-gray-200">
                    <ul className="flex flex-wrap justify-center gap-8 py-3 text-sm font-medium text-gray-800">
                        <li>
                            <Link href="#">Shop By Team</Link>
                        </li>
                        <li>
                            <Link href="#">Shop By Driver</Link>
                        </li>
                        <li>
                            <Link href="#">Men</Link>
                        </li>
                        <li>
                            <Link href="#">Women</Link>
                        </li>
                        <li>
                            <Link href="#">Kids</Link>
                        </li>
                        <li>
                            <Link href="#">Headwear</Link>
                        </li>
                        <li>
                            <Link href="#">Gifts & Accessories</Link>
                        </li>
                        <li>
                            <Link href="#">Collectibles</Link>
                        </li>
                        <li>
                            <Link href="#">Clearance</Link>
                        </li>
                        <li>
                            <Link href="#">Christmas</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
