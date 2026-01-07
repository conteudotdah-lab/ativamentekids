import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const CTAButton = ({ children, onClick, variant = "primary" }: CTAButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-100";

  const variants = {
    primary:
      "bg-accent text-accent-foreground shadow-cta hover:brightness-110",
    secondary:
      "bg-primary text-primary-foreground shadow-card hover:shadow-card-hover",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default CTAButton;
