// src/app/teams/aston-martin/[id]/page.tsx
"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    astonMartinProducts,
    getAstonMartinProductById,
    type Product,
} from "@/data/astonMartinProducts";
import ProductGallery from "@/components/product/ProductGallery";
import SharedProductTabs from "@/components/product/SharedProductTabs";

type PageProps = {
    params: Promise<{ id: string }>;
};

const SIZES = ["XS", "S", "M", "L", "XL", "2XL"];

export default function AstonMartinProductDetailPage({ params }: PageProps) {
    // ✅ unwrap params (Next 15: params là Promise)
    const { id } = use(params);
    const idNumber = Number(id);

    const product = getAstonMartinProductById(idNumber);
    const [selectedSize, setSelectedSize] = useState<string | null>("M");

    if (!product) {
        return (
            <div className="bg-white">
                {/* thanh sale trên cùng */}
                <div className="border-t border-gray-200" />
                <p className="py-2 text-center text-[11px] uppercase tracking-[0.15em] text-gray-700">
                    UP TO 60% OFF SELECTED LINES{" "}
                    <span className="font-semibold">Use code SALE60</span>
                </p>

                <div className="mx-auto max-w-4xl px-6 py-16">
                    <p>Product not found.</p>
                </div>
            </div>
        );
    }

    // gợi ý thêm vài sản phẩm phía dưới
    const alsoLike: Product[] = astonMartinProducts
        .filter((p) => p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="bg-white pb-16">
            {/* thanh sale trên cùng giống list page */}
            <div className="border-t border-gray-200" />
            <p className="py-2 text-center text-[11px] uppercase tracking-[0.15em] text-gray-700">
                UP TO 60% OFF SELECTED LINES{" "}
                <span className="font-semibold">Use code SALE60</span>
            </p>

            <div className="mx-auto max-w-[1450px] px-8">
                {/* breadcrumb */}
                <div className="py-4 text-xs text-gray-500">
                    <Link href="/teams/aston-martin" className="hover:underline">
                        Aston Martin
                    </Link>{" "}
                    /{" "}
                    <span className="hover:underline">
                        Aston Martin Hoodies &amp; T-Shirts
                    </span>
                </div>

                {/* layout chính: gallery + info */}
                <div className="grid grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] gap-12">
                    {/* gallery bên trái */}
                    <div>
                        <ProductGallery images={product.images} alt={product.name} />
                    </div>

                    {/* info bên phải */}
                    <div>
                        <h1 className="text-2xl font-semibold">{product.name}</h1>
                        <p className="mt-1 text-xs text-gray-500">by Aston Martin</p>

                        <div className="mt-3 flex items-baseline gap-2 text-sm">
                            <span className="font-semibold">{product.price}</span>
                            {product.oldPrice && (
                                <span className="text-xs text-gray-500 line-through">
                                    {product.oldPrice}
                                </span>
                            )}
                            {product.note && (
                                <span className="ml-2 rounded bg-red-600 px-2 py-[2px] text-[10px] font-semibold uppercase text-white">
                                    {product.note}
                                </span>
                            )}
                        </div>

                        {/* chọn size */}
                        <div className="mt-6">
                            <p className="mb-2 text-xs font-semibold uppercase text-gray-700">
                                Size
                            </p>
                            <div className="grid max-w-xs grid-cols-3 gap-2">
                                {SIZES.map((size) => {
                                    const isSelected = selectedSize === size;
                                    const isDisabled = size === "XS"; // XS mờ cho đúng UI

                                    return (
                                        <button
                                            key={size}
                                            type="button"
                                            onClick={() => !isDisabled && setSelectedSize(size)}
                                            className={`border px-8 py-2 text-sm transition ${isDisabled
                                                    ? "cursor-not-allowed bg-gray-100 text-gray-400"
                                                    : "cursor-pointer hover:border-black"
                                                } ${isSelected && !isDisabled
                                                    ? "bg-black text-white"
                                                    : "bg-white"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* nút Add to cart */}
                        <button
                            type="button"
                            className="mt-6 flex h-11 w-full items-center justify-center bg-black text-sm font-semibold text-white"
                        >
                            ADD TO CART
                        </button>

                        {/* Tabs Description / Details / Shipping (dùng chung) */}
                        <SharedProductTabs />
                    </div>
                </div>

                {/* YOU MAY ALSO LIKE */}
                <div className="mt-12 border-t border-gray-200 pt-6">
                    <h2 className="mb-4 text-sm font-semibold">You May Also Like</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {alsoLike.map((p) => (
                            <Link
                                key={p.id}
                                href={`/teams/aston-martin/${p.id}`}
                                className="text-sm text-gray-900"
                            >
                                <div className="bg-white">
                                    <Image
                                        src={p.image}
                                        alt={p.name}
                                        width={300}
                                        height={300}
                                        className="h-60 w-full object-contain"
                                    />
                                </div>
                                <p className="mt-2 text-xs text-gray-500">{p.price}</p>
                                <p className="mt-1 line-clamp-2 text-sm">{p.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
