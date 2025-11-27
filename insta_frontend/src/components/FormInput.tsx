import React from "react";
import {tv} from "tailwind-variants";
import clsx from "clsx";



interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement>, React.ComponentProps<"input"> {
    type: string,
    placeholder: string,
    InputBorder?: "none" | "thin" | "thick" | "normal" | "btnShadow",
    isFocused?: boolean,
    className: string
}

const inputForm = tv({
    base: "m-4 border-b outline-none",
    variants: {
        InputBorder: {
            none:"",
            thin: "border-b",
            thick: "border-2",
            normal: "border",
            btnShadow: "shadow-lg"
        },

    }
})

const InputForm = ({
    type,
    placeholder,
    className,
    InputBorder,
    isFocused=false,
    ...props
}: InputFormProps) => {
    return (
        <input
            // className="m-4 border-b outline-none"
            className={clsx(inputForm({InputBorder}), isFocused && "focus:border-indigo-500", className)}
            type={type}
            placeholder={placeholder}
            {...props}
        />
    );
}

export default InputForm;
