"use client";

import Image from "next/image";
import Link from "next/link";

const teams = [
    { name: "Mercedes", logo: "/teams/mercedes.png", href: "/teams/mercedes" },
    { name: "Red Bull", logo: "/teams/redbull.png", href: "/teams/red-bull" },
    { name: "Ferrari", logo: "/teams/ferrari.png", href: "/teams/ferrari" },
    { name: "McLaren", logo: "/teams/mclaren.png", href: "/teams/mclaren" },
    { name: "Kick Sauber", logo: "/teams/kicksauber.png", href: "/teams/kick-sauber" },
    { name: "Aston Martin", logo: "/teams/astonmartin.png", href: "/teams/aston-martin" },
    { name: "Alpine", logo: "/teams/alpine.png", href: "/teams/alpine" },
    { name: "VCARB", logo: "/teams/VCARB.png", href: "/teams/vcarb" },
    { name: "Williams", logo: "/teams/williams.png", href: "/teams/williams" },
    { name: "Haas", logo: "/teams/haas.png", href: "/teams/haas" },
    { name: "F1", logo: "/teams/f1.png", href: "/teams/formula-one" },
];

export default function ShopYourTeams() {
    return (
        <section className="border-b border-gray-200 bg-white">
            <div className="max-w-6xl mx-auto px-4 py-6">
                {/* dòng SALE60 */}
                <p className="mb-4 text-center text-[11px] uppercase tracking-[0.15em] text-gray-600">
                    UP TO 60% OFF SELECTED LINES{" "}
                    <span className="font-semibold">Use code SALE60</span>
                </p>

                <div className="mb-4 flex items-baseline justify-between">
                    <h2 className="text-lg font-semibold tracking-tight">
                        Shop Your Teams
                    </h2>
                    <button className="text-sm font-medium text-gray-800 underline hover:no-underline">
                        See All
                    </button>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-3 pt-1">
                    {teams.map((team) => (
                        <Link
                            key={team.name}
                            href={team.href}
                            className="group flex min-w-[80px] flex-col items-center cursor-pointer"
                        >
                            <div className="relative flex h-16 w-16 items-center justify-center">
                                <div className="absolute inset-0 rounded-full border border-gray-300 group-hover:border-gray-500 group-hover:animate-spin" />
                                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                                    <Image
                                        src={team.logo}
                                        alt={team.name}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <span className="mt-2 text-[11px] leading-tight text-gray-700 text-center">
                                {team.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
