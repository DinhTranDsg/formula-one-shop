"use client";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="relative bg-white shadow">
      <ul className="flex space-x-8 px-8 py-4 font-medium">
        {/* --- SHOP BY TEAM --- */}
        <li
          className="relative"
          onMouseEnter={() => setOpenMenu(true)}
          onMouseLeave={() => setOpenMenu(false)}
        >
          <button className="hover:text-red-600 transition-colors">
            Shop By Team
          </button>

          {/* Dropdown menu */}
          {openMenu && (
            <div
              className="absolute left-0 top-full mt-2 w-[600px] bg-white border shadow-lg 
                         p-6 grid grid-cols-3 gap-6 z-50"
            >
              <div>
                <h4 className="font-semibold mb-2">Teams</h4>
                <ul className="space-y-1">
                  <li className="hover:text-red-600 cursor-pointer">Alpine</li>
                  <li className="hover:text-red-600 cursor-pointer">Aston Martin</li>
                  <li className="hover:text-red-600 cursor-pointer">Ferrari</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Drivers</h4>
                <ul className="space-y-1">
                  <li className="hover:text-red-600 cursor-pointer">Haas</li>
                  <li className="hover:text-red-600 cursor-pointer">Kick Sauber</li>
                  <li className="hover:text-red-600 cursor-pointer">McLaren</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Brands</h4>
                <ul className="space-y-1">
                  <li className="hover:text-red-600 cursor-pointer">Mercedes</li>
                  <li className="hover:text-red-600 cursor-pointer">Red Bull Racing</li>
                  <li className="hover:text-red-600 cursor-pointer">Pirelli</li>
                </ul>
              </div>
            </div>
          )}
        </li>

        {/* --- CÁC MỤC KHÁC --- */}
        <li>
          <button className="hover:text-red-600 transition-colors">Shop By Driver</button>
        </li>
        <li>
          <button className="hover:text-red-600 transition-colors">Men</button>
        </li>
        <li>
          <button className="hover:text-red-600 transition-colors">Women</button>
        </li>
      </ul>
    </nav>
  );
}
