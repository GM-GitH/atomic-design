interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What Tailwind classNames to use
     */
    tailwindStyles?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const ButtonExample: ({ primary, size, tailwindStyles, label, ...props }: ButtonProps) => JSX.Element;
export {};
