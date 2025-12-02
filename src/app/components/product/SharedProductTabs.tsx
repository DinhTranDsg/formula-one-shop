// src/app/components/product/SharedProductTabs.tsx
"use client";

import React, { useState } from "react";

type TabKey = "description" | "details" | "shipping";

interface TabDef {
    key: TabKey;
    label: string;
    content: React.ReactNode;
}

const TABS: TabDef[] = [
    {
        key: "description",
        label: "Description",
        content: (
            <p className="text-sm leading-relaxed text-gray-800">
                Make your look authentic in this hooded sweatshirt from adidas. Styled
                like the hoodies worn by Mercedes – AMG Petronas Formula One Team
                drivers, this sweatshirt fits a bit loose and is made from all-cotton
                French terry fabric that is soft to the touch. Team and sponsor logos on
                the chest provide the official finish.
            </p>
        ),
    },
    {
        key: "details",
        label: "Details",
        content: (
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
                <li>Product ID: 202359124</li>
                <li>Brand: adidas</li>
                <li>Country of origin: India</li>
                <li>Loose fit</li>
                <li>Front pockets</li>
                <li>Ribbed cuffs and hem</li>
                <li>Mercedes - AMG Petronas Formula One Team logo</li>
                <li>Material: 100% Cotton Knitted</li>
                <li>Long sleeve</li>
                <li>Pullover</li>
                <li>Hooded</li>
                <li>Officially licensed</li>
            </ul>
        ),
    },
    {
        key: "shipping",
        label: "Shipping",
        content: (
            <p className="text-sm leading-relaxed text-gray-800">
                This item will ship within 2 business days. Please proceed to checkout
                for shipping options and additional transit times.
            </p>
        ),
    },
];

export default function SharedProductTabs() {
    const [openKey, setOpenKey] = useState<TabKey | null>("description");

    const toggle = (key: TabKey) => {
        setOpenKey((prev) => (prev === key ? null : key));
    };

    return (
        <div className="mt-6 border border-gray-200 text-sm">
            {TABS.map((tab: TabDef) => {
                const isOpen = openKey === tab.key;
                return (
                    <div key={tab.key} className="border-b last:border-b-0">
                        <button
                            type="button"
                            onClick={() => toggle(tab.key)}
                            className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold"
                        >
                            <span>{tab.label}</span>
                            <span className="text-xs">{isOpen ? "▴" : "▾"}</span>
                        </button>
                        {isOpen && (
                            <div className="px-4 pb-4 pt-1">{tab.content}</div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
