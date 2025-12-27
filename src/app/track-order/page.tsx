"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { OrderDetails } from "@/components/order-details";
import { AlertCircle } from "lucide-react";
import { OrderProgress } from "@/components/order-progress";
import { Order } from "src/lib/mock-order";

function getOrderFromLocalStorage(orderId: string): Order | null {
  if (typeof window === "undefined") return null;

  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  return orders.find((order: Order) => order.id === orderId) || null;
}

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState<Order | null>(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setOrder(null);
    setSearched(false);

    if (!orderId.trim()) {
      setError("Please enter an order ID");
      return;
    }

    const foundOrder = getOrderFromLocalStorage(orderId.toUpperCase());
    setSearched(true);

    if (foundOrder) {
      setOrder(foundOrder);
    } else {
      setError("Order not found. Please check your order ID and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Track Your Order</h1>
          <p className="text-muted-foreground">
            Enter your order ID to check the status of your delivery
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Find Your Order</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                placeholder="Enter order ID"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">Search</Button>
            </form>
          </CardContent>
        </Card>

        {/* Error Alert */}
        {error && (
          <Alert variant="destructive" className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Order Found */}
        {order && (
          <div className="space-y-8">
            {/* Progress Tracker */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <OrderProgress status={order.status} />
              </CardContent>
            </Card>

            {/* Order Details */}
            <OrderDetails order={order} />
          </div>
        )}

        {/* No Search Yet */}
        {!searched && !order && (
          <Card className="border-dashed">
            <CardContent className="pt-8 pb-8 text-center">
              <p className="text-muted-foreground mb-4">
                Start tracking by entering your order ID above
              </p>
              <div className="text-4xl mb-4">📦</div>
              <p className="text-sm text-muted-foreground">
                Order IDs are shown in your confirmation after checkout
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
