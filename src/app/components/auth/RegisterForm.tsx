"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { registerUser } from "@/lib/auth";

export function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [checkboxes, setCheckboxes] = useState({
    f1Store: false,
    f1News: false,
    termsAccepted: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof typeof checkboxes) => {
    setCheckboxes((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!checkboxes.termsAccepted) {
      setError("You must agree to the Terms of Use and Privacy Policy");
      return;
    }

    setLoading(true);
    try {
      registerUser(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password
      );
      router.push("/cart");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">REGISTER</h1>
        <p className="text-sm text-muted-foreground">
          Already a member?{" "}
          <Link
            href="/login"
            className="font-semibold underline hover:no-underline"
          >
            LOG IN
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="sr-only">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="sr-only">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="sr-only">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="sr-only">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleInputChange}
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password*"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            disabled={loading}
          />
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <div className="space-y-3 text-sm">
          <p className="text-muted-foreground">
            I want to receive the latest information by email and SMS, including
            news, surveys, offers and promotions from:
          </p>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="f1Store"
              checked={checkboxes.f1Store}
              onCheckedChange={() => handleCheckboxChange("f1Store")}
              disabled={loading}
            />
            <Label
              htmlFor="f1Store"
              className="text-muted-foreground font-normal cursor-pointer"
            >
              I want to receive the latest offers and promotions from the F1®
              Store (operated by Fanatics International Limited)
            </Label>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="f1News"
              checked={checkboxes.f1News}
              onCheckedChange={() => handleCheckboxChange("f1News")}
              disabled={loading}
            />
            <Label
              htmlFor="f1News"
              className="text-muted-foreground font-normal cursor-pointer"
            >
              I want to receive the latest information from F1® including
              relevant news, surveys, offers, and promotions
            </Label>
          </div>
        </div>

        <div className="text-xs text-muted-foreground space-y-1">
          <p>
            By signing up, you agree to our{" "}
            <Link href="/terms" className="underline hover:no-underline">
              Terms of Use
            </Link>{" "}
            &{" "}
            <Link href="/privacy" className="underline hover:no-underline">
              Privacy Policy
            </Link>
          </p>
          <div className="flex items-start space-x-3 pt-2">
            <Checkbox
              id="termsAccepted"
              checked={checkboxes.termsAccepted}
              onCheckedChange={() => handleCheckboxChange("termsAccepted")}
              disabled={loading}
              required
            />
            <Label
              htmlFor="termsAccepted"
              className="text-muted-foreground font-normal cursor-pointer"
            >
              I agree to the Terms of Use and Privacy Policy
            </Label>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating account..." : "Create an account"}
        </Button>
      </form>
    </div>
  );
}
