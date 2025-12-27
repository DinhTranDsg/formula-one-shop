"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface OrderSummaryProps {
  subtotal: number;
  discount: number;
  total: number;
}

export function OrderSummary({ subtotal, discount, total }: OrderSummaryProps) {
  const router = useRouter();

  const handleCheckout = () => {
    router.push(
      `/checkout/delivery?total=${total.toFixed(2)}&subtotal=${subtotal.toFixed(
        2
      )}&discount=${discount.toFixed(2)}`
    );
  };

  return (
    <div className="sticky top-6 bg-card border border-border rounded-lg p-6 h-fit">
      <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

      <div className="space-y-3 mb-6 pb-6 border-b border-border">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Item Total</span>
          <span className="font-semibold text-foreground">
            £{subtotal.toFixed(2)}
          </span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Other Markdowns</span>
            <span className="font-semibold text-green-600">
              -£{discount.toFixed(2)}
            </span>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="font-bold text-foreground">Cart Total</span>
        <span className="text-2xl font-bold text-foreground">
          £{total.toFixed(2)}
        </span>
      </div>

      <Button
        onClick={handleCheckout}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 font-semibold mb-3 flex items-center justify-center gap-2"
      >
        <Lock className="h-4 w-4" />
        Checkout
      </Button>

      <Button
        variant="outline"
        className="w-full py-6 font-semibold bg-transparent"
      >
        Continue Shopping
      </Button>

      <div className="mt-6 p-4 bg-muted rounded text-center">
        <button className="text-primary hover:underline text-sm font-medium">
          Have a Promo Code?
        </button>
      </div>
    </div>
  );
}
