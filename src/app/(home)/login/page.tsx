import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = {
  title: "Log In - Shopping Cart",
  description: "Log in to your account",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <LoginForm />
    </main>
  );
}
