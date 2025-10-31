"use client";

import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");

  const teams = [
    { name: "Mercedes", logo: "/teams/mercedes.png" },
    { name: "Red Bull", logo: "/teams/redbull.png" },
    { name: "Ferrari", logo: "/teams/ferrari.png" },
    { name: "McLaren", logo: "/teams/mclaren.png" },
    { name: "Kick Sauber", logo: "/teams/kicksauber.png" },
    { name: "Aston Martin", logo: "/teams/astonmartin.png" },
    { name: "Alpine", logo: "/teams/alpine.png" },
    { name: "RB", logo: "/teams/rb.png" },
    { name: "Williams", logo: "/teams/williams.png" },
    { name: "Haas", logo: "/teams/haas.png" },
    { name: "F1", logo: "/teams/f1.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* --- Top bar --- */}
      <div className="w-full bg-gray-50 text-xs text-gray-600 py-2 px-6 flex justify-between">
        <span>SIGN UP & SAVE 10%</span>
        <div className="flex items-center gap-4">
          <Link href="#">Track Order</Link>
          <Link href="#">Help</Link>
          <Link href="#">My Account</Link>
          <span>Language ▾</span>
          <span>GBP £ ▾</span>
          <ShoppingCart className="w-4 h-4 cursor-pointer" />
        </div>
      </div>

      {/* --- Header --- */}
      <header className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/f1logo.png" alt="F1 Store" width={70} height={40} className="object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold">Store</span>
              <span className="text-[10px] text-gray-500 -mt-1">A Fanatics Experience</span>
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center border rounded-full px-3 py-2 w-full md:w-[500px]">
            <Search className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              placeholder="What can we help you find?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 outline-none text-sm"
            />
          </div>

          {/* AMEX logo */}
          {/* <div className="hidden md:block">
            <Image src="/amex-logo.png" alt="AMEX" width={60} height={40} className="object-contain" />
          </div> */}
        </div>

        {/* --- Menu --- */}
        <nav className="border-t border-gray-200 bg-gray-50">
          <ul className="flex flex-wrap justify-center gap-8 py-3 text-sm font-medium text-gray-700">
            <li><Link href="#">Shop By Team</Link></li>
            <li><Link href="#">Shop By Driver</Link></li>
            <li><Link href="#">Men</Link></li>
            <li><Link href="#">Women</Link></li>
            <li><Link href="#">Kids</Link></li>
            <li><Link href="#">Headwear</Link></li>
            <li><Link href="#">Gifts & Accessories</Link></li>
            <li><Link href="#">Collectibles</Link></li>
            <li><Link href="#">Clearance</Link></li>
          </ul>
        </nav>
      </header>

      {/* --- Team Logos --- */}
      {/* <section className="py-8 bg-white border-b">
        <h2 className="text-center text-2xl font-bold mb-6">Shop By Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teams.map((team) => (
            <div key={team.name} className="flex flex-col items-center cursor-pointer hover:opacity-80 transition">
              <Image src={team.logo} alt={team.name} width={60} height={60} className="object-contain" />
            </div>
          ))}
        </div>
      </section> */}

      {/* --- Main content --- */}
      <main className="flex-1">{children}</main>

      {/* --- Footer --- */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} F1 Store — A Fanatics Experience
      </footer>
    </div>
  );
}
