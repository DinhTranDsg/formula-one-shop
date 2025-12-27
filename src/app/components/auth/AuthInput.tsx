import { useState } from "react";
import { MessageSquare, Eye, EyeOff } from "lucide-react";

interface AuthInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  showToggle?: boolean;
}

const AuthInput = ({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  showToggle = false,
}: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showToggle ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative">
      <input
        type={inputType}
        placeholder={`${placeholder}${required ? "*" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="auth-input pr-14 border border-gray-200 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
        required={required}
        aria-label={placeholder}
      />
      <button
        type="button"
        className={`absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:opacity-90 transition-all bg-white/60 dark:bg-slate-900 border border-transparent hover:border-primary rounded-full cursor-pointer p-1 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/30 ${
          showToggle ? "cursor-pointer" : "pointer-events-none cursor-default"
        }`}
        onClick={() => showToggle && setShowPassword(!showPassword)}
        tabIndex={showToggle ? 0 : -1}
        aria-label={
          showToggle
            ? showPassword
              ? "Hide password"
              : "Show password"
            : `${placeholder} icon`
        }
        aria-pressed={showToggle ? showPassword : undefined}
        aria-hidden={!showToggle}
      >
        {showToggle ? (
          showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )
        ) : (
          <MessageSquare className="h-5 w-5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
};

export default AuthInput;
