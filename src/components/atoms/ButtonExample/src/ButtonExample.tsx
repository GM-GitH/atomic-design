interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What Tailwind classNames to use
   */
  tailwindStyles?: string
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large"
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const ButtonExample = ({
  primary = false,
  size = "medium",
  tailwindStyles,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "text-white bg-blue-400 hover:bg-blue-500 shadow-sm"
    : "text-slate-800 bg-slate-50 shadow-sm"
  return (
    <button
      type="button"
      className={[
        "font-sans font-bold rounded-full cursor-pointer inline-block leading-none",
        size === "small" && "text-xs py-2.5 px-4",
        size === "medium" && "text-sm py-3 px-5",
        size === "large" && "text-base py-3.5 px-6",
        tailwindStyles,
        mode
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  )
}
