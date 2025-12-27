"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/data/team";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
}

export function CartItem({
  product,
  quantity,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  return (
    <div className="border-b border-border py-6 flex gap-6">
      <div className="flex-shrink-0 w-32 h-32 bg-muted rounded-lg overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover"
          width={360}
          height={360}
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-lg text-foreground">
              {product.name}
            </h3>
            {product.note && (
              <p className="text-sm text-green-600 font-medium">
                {product.note}
              </p>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onRemove}
            className="text-destructive hover:bg-destructive/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-medium text-muted-foreground">
            Size
          </span>
          <select className="border border-input rounded px-3 py-1 bg-background text-foreground text-sm">
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground">
            Quantity
          </span>
          <select
            value={quantity}
            onChange={(e) => onQuantityChange(Number.parseInt(e.target.value))}
            className="border border-input rounded px-3 py-1 bg-background text-foreground text-sm"
          >
            {[1, 2, 3, 4, 5].map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <p className="text-xl font-bold text-foreground">{product.price}</p>
          {product.oldPrice && (
            <p className="text-sm text-muted-foreground line-through">
              {product.oldPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
