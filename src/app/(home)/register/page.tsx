import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Register - Shopping Cart",
  description: "Create a new account",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <RegisterForm />
    </main>
  );
}
