"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface OrderProgressProps {
  status: "pending" | "processing" | "shipped" | "delivered";
}

export function OrderProgress({ status }: OrderProgressProps) {
  const steps = [
    { id: "pending", label: "Order Placed", icon: "📦" },
    { id: "processing", label: "Processing", icon: "⚙️" },
    { id: "shipped", label: "Shipped", icon: "🚚" },
    { id: "delivered", label: "Delivered", icon: "✓" },
  ];

  const currentStepIndex = steps.findIndex((step) => step.id === status);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center flex-1">
            {/* Circle */}
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold mb-2 transition-all",
                index <= currentStepIndex
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {index <= currentStepIndex ? (
                <Check className="w-6 h-6" />
              ) : (
                index + 1
              )}
            </div>

            {/* Label */}
            <p
              className={cn(
                "text-sm font-medium text-center",
                index <= currentStepIndex
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {step.label}
            </p>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "absolute left-1/2 top-6 w-[calc(100%-3rem)] h-1 -z-10 transition-all",
                  index < currentStepIndex ? "bg-primary" : "bg-muted"
                )}
                style={{
                  marginLeft: `${(index + 1) * 25}%`,
                  marginTop: "-2rem",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
