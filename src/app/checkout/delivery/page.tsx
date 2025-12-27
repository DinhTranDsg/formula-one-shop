"use client";

import type React from "react";
import { useState, Suspense, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import QRCodeDisplay from "@/components/qr-code-display";
import { Order } from "src/lib/mock-order";

function DeliveryCheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const total = searchParams.get("total") || "0.00";
  const subtotal = searchParams.get("subtotal") || "0.00";
  const discount = searchParams.get("discount") || "0.00";

  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "cod", // cod or card
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckout = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const orderId = `ORD-${Date.now().toString().slice(-9)}`;
      setFormData((prev) => ({ ...prev, id: orderId }));
      const orderData: Order = {
        id: orderId,
        createdAt: new Date().toISOString(),
        status: "pending",
        items: [], // Cart items sẽ gán sau

        deliveryAddress: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
        },

        paymentMethod: formData.paymentMethod as "cod" | "card",
        total: Number.parseFloat(total),
        estimatedDelivery: new Date(
          Date.now() + 5 * 24 * 60 * 60 * 1000
        ).toISOString(), // ví dụ: 5 ngày sau
      };

      // Save to localStorage
      const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
      existingOrders.push(orderData);
      localStorage.setItem("orders", JSON.stringify(existingOrders));

      if (formData.paymentMethod === "cod") {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    },
    [total, formData]
  );

  if (isSubmitted && formData.paymentMethod === "cod") {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Order Confirmed!
              </h1>
              <p className="text-muted-foreground text-lg">
                Your order will be delivered to the provided address
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg mb-6 text-left">
              <h2 className="font-semibold text-foreground mb-4">
                Delivery Details
              </h2>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-muted-foreground">Id:</span>
                  <span className="font-medium text-foreground ml-2">
                    {formData.id}
                  </span>
                </p>
                <p>
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium text-foreground ml-2">
                    {formData.fullName}
                  </span>
                </p>
                <p>
                  <span className="text-muted-foreground">Address:</span>
                  <span className="font-medium text-foreground ml-2">
                    {formData.address}, {formData.city} {formData.postalCode}
                  </span>
                </p>
                <p>
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="font-medium text-foreground ml-2">
                    {formData.phone}
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <p className="text-muted-foreground mb-2">Order Total</p>
              <p className="text-3xl font-bold text-foreground">£{total}</p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => router.push("/cart")}
                className="w-full bg-primary text-primary-foreground"
              >
                Back to Cart
              </Button>
              <Button
                onClick={() => router.push("/")}
                variant="outline"
                className="w-full"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isSubmitted && formData.paymentMethod === "card") {
    const paymentData = JSON.stringify({
      amount: total,
      currency: "GBP",
      name: formData.fullName,
      orderId: Math.random().toString(36).substr(2, 9).toUpperCase(),
    });

    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-card border border-border rounded-lg p-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Payment Required
            </h1>
            <p className="text-muted-foreground mb-8">
              Scan the QR code to complete your payment
            </p>

            <div className="bg-muted p-8 rounded-lg mb-6 flex flex-col items-center">
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                Scan to Pay
              </p>
              <QRCodeDisplay data={paymentData} size={300} />
            </div>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h2 className="font-semibold text-foreground mb-4">
                Payment Summary
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">
                    £{subtotal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="font-medium text-green-600">
                    -£{discount}
                  </span>
                </div>
              </div>
              <div className="border-t border-border mt-4 pt-4 flex justify-between">
                <span className="font-bold text-foreground">Total Amount</span>
                <span className="text-2xl font-bold text-foreground">
                  £{total}
                </span>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-6">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Note:</strong> This QR code contains your payment
                information. Share it only with trusted payment processors.
              </p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => router.push("/cart")}
                className="w-full bg-primary text-primary-foreground"
              >
                Back to Cart
              </Button>
              <Button
                onClick={() => router.push("/")}
                variant="outline"
                className="w-full"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-2xl mx-auto px-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Cart
        </button>

        <div className="bg-card border border-border rounded-lg p-8">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            Delivery Information
          </h1>

          <form onSubmit={handleCheckout} className="space-y-6">
            {/* Personal Information */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="+44 7700 900000"
              />
            </div>

            {/* Address Information */}
            <div className="pt-4 border-t border-border">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Shipping Address
              </h2>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="London"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="SW1A 1AA"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="pt-4 border-t border-border">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Payment Method
              </h2>

              <div className="space-y-3">
                <label className="flex items-center p-4 border border-input rounded-lg cursor-pointer hover:bg-muted transition">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="ml-3">
                    <span className="block font-semibold text-foreground">
                      Cash on Delivery (COD)
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      Pay when you receive your order
                    </span>
                  </span>
                </label>

                <label className="flex items-center p-4 border border-input rounded-lg cursor-pointer hover:bg-muted transition">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="ml-3">
                    <span className="block font-semibold text-foreground">
                      Card Payment
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      Pay now with your card via QR code
                    </span>
                  </span>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="pt-4 border-t border-border bg-muted p-6 rounded-lg">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">
                    £{subtotal}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="font-medium text-green-600">
                    -£{discount}
                  </span>
                </div>
              </div>
              <div className="border-t border-border pt-4 flex justify-between">
                <span className="font-bold text-foreground">Total</span>
                <span className="text-2xl font-bold text-foreground">
                  £{total}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 font-semibold"
            >
              Complete Checkout
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function DeliveryCheckoutPage() {
  return (
    <Suspense fallback={null}>
      <DeliveryCheckoutContent />
    </Suspense>
  );
}
