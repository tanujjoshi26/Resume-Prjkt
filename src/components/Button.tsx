import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: Props) {
  const baseStyles =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-white text-black hover:bg-gray-100 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-0.5",
    secondary:
      "border border-white/[0.1] text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/[0.04] hover:-translate-y-0.5",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  return <button className={combinedStyles}>{children}</button>;
}
