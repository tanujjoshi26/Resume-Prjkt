type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: Props) {
  return (
    <button
      className={`px-6 py-3 rounded-2xl transition-all duration-300 active:scale-95 font-medium
      ${
        variant === "primary"
          ? "bg-white text-black hover:scale-105 hover:shadow-xl"
          : "border border-gray-700 hover:border-gray-500 hover:bg-white/5"
      }`}
    >
      {children}
    </button>
  );
}
