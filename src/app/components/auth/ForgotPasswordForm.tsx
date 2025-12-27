import { useState } from "react";
import AuthInput from "./AuthInput";

interface ForgotPasswordFormProps {
  onSwitchToLogin: () => void;
}

const ForgotPasswordForm = ({ onSwitchToLogin }: ForgotPasswordFormProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forgot password submitted:", { email });
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-xl font-bold tracking-wide mb-1">FORGOT PASSWORD</h1>
      <p className="text-sm text-muted-foreground mb-8">
        We will send an email with instructions to reset your password.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={setEmail}
          required
        />

        <div className="pt-4">
          <button type="submit" className="auth-button">
            Send
          </button>
        </div>

        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="auth-link-primary"
          >
            BACK TO LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
