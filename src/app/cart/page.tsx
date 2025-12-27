"use client";

import { CartItem } from "@/components/cart-item";
import { OrderSummary } from "@/components/order-summary";
import productsData from "@/data/teamdata";
import { useState, useEffect } from "react";
import { getCart, saveCart } from "../lib/cart";

export default function CartPage() {
  const [cart, setCart] = useState<
    { productId: number; quantity: number; size?: string }[]
  >([]);

  // initialize from localStorage
  useEffect(() => {
    setCart(getCart());
  }, []);

  // persist changes
  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const cartItems = cart
    .map((item, idx) => ({
      ...item,
      idx,
      product: productsData.find((p) => p.id === item.productId),
    }))
    .filter((item) => item.product);

  const subtotal = cartItems.reduce((sum, item) => {
    const price = Number.parseFloat(
      item.product!.price.replace(/[^0-9.]/g, "")
    );
    return sum + price * item.quantity;
  }, 0);

  const discount = subtotal * 0.15; // 15% discount for example
  const total = subtotal - discount;

  const handleQuantityChange = (index: number, quantity: number) => {
    setCart(
      cart.map((item, i) => (i === index ? { ...item, quantity } : item))
    );
  };

  const handleRemove = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Your Items
          </h1>
          <p className="text-green-600 font-medium">
            Items May Sell Out, Order Now!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6">
              {cartItems.length > 0 ? (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <CartItem
                      key={`${item.productId}-${item.size ?? "default"}-${
                        item.idx
                      }`}
                      product={item.product!}
                      quantity={item.quantity}
                      onQuantityChange={(quantity) =>
                        handleQuantityChange(item.idx, quantity)
                      }
                      onRemove={() => handleRemove(item.idx)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-12">
                  Your cart is empty
                </p>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary
              subtotal={subtotal}
              discount={discount}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
