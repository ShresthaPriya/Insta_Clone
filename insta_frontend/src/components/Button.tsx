import type { ButtonProps } from "../types/form";
import { tv } from "tailwind-variants";

const button = tv({
  base: "font-medium px-4 py-2 transition",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-green-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    rounded: {
      none: "",
      md: "rounded-md",
      full: "rounded-full",
    },
  },
});

export const FormButton = ({
  text,
  color,
  size,
  rounded,
  className = "",
  ...props
}: ButtonProps & {
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "md" | "full"
}) => {
  return (
    <button {...props} className={button({ size, color, rounded, className })}>
      {text}
    </button>
  );
};
