{/* {errors?.[name] && <span className="text-red-500 text-xs">{errors?.[name]?.message}</span>} */ }

export const FormMessage = ({ className, variant, message, ...props }: React.ComponentProps<"p"> & { variant: string; message?: string }) => {
    return (
        <p className={variant === "error" ? "text-red-500" : "text-red-50"} {...props}>{message}</p>
    )
}