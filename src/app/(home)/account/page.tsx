"use client"
import { useState } from "react";

export default function AccountPage() {
  const [mode, setMode] = useState<"login" | "register" | "forgot">("login");

  return (
    <div className="mx-auto w-full max-w-md rounded-xl p-8 shadow-lg">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        {mode !== "forgot" && (
          <div className="mb-6 flex border-b">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 pb-3 text-sm font-semibold ${
                mode === "login"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400"
              }`}
            >
              LOG IN
            </button>
            <button
              onClick={() => setMode("register")}
              className={`flex-1 pb-3 text-sm font-semibold ${
                mode === "register"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400"
              }`}
            >
              CREATE ACCOUNT
            </button>
          </div>
        )}

        {mode === "login" && (
          <>
            <h2 className="text-2xl font-bold text-black/60">Log in</h2>
            <p className="mt-1 mb-6 text-sm text-gray-500">
              Log in to your account
            </p>

            <input
              type="email"
              placeholder="Email"
              className="mb-4 w-full rounded-md border px-4 py-3 text-black text-sm focus:border-black focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-2 w-full rounded-md border px-4 py-3 text-black text-sm focus:border-black focus:outline-none"
            />

            <div className="mb-6 text-right">
              <button
                onClick={() => setMode("forgot")}
                className="text-sm text-gray-500 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button className="w-full rounded-md bg-black py-3 text-sm font-semibold text-white hover:bg-gray-900">
              LOG IN
            </button>
          </>
        )}

        {mode === "register" && (
          <>
            <h2 className="text-2xl font-bold text-black/60">Create Account</h2>
            <p className="mt-1 mb-6 text-sm text-gray-500">
              Join Formula One Shop
            </p>

            <input
              type="text"
              placeholder="Full Name"
              className="mb-4 w-full rounded-md border px-4 py-3 text-black text-sm focus:border-black focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="mb-4 w-full rounded-md border px-4 py-3 text-black text-sm focus:border-black focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-6 w-full rounded-md border px-4 py-3 text-black text-sm focus:border-black focus:outline-none"
            />

            <button className="w-full rounded-md bg-black py-3 text-sm font-semibold text-white hover:bg-gray-900">
              CREATE ACCOUNT
            </button>
          </>
        )}

        {mode === "forgot" && (
          <>
            <h2 className="text-2xl text-black/60 font-bold">Reset Password</h2>
            <p className="mt-1 mb-6 text-sm text-gray-500">
              Enter your email to receive a reset link
            </p>

            <input
              type="email"
              placeholder="Email"
              className="mb-6 w-full rounded-md border px-4 py-3 text-black text-sm focus:border-black focus:outline-none"
            />

            <button className="mb-4 w-full rounded-md bg-black py-3 text-sm font-semibold text-white hover:bg-gray-900">
              SEND RESET LINK
            </button>

            <button
              onClick={() => setMode("login")}
              className="text-sm text-gray-500 hover:underline"
            >
              ← Back to login
            </button>
          </>
        )}
      </div>
    </div>
  );
}