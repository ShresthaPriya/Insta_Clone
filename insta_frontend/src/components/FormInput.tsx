import React from "react";



interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement>, React.ComponentProps<"input"> {
    type: string,
    placeholder: string,
    className: string
}

const InputForm = ({
    type,
    placeholder,
    className,
    ...props
}: InputFormProps) => {
    return (
        <input
            // className="m-4 border-b outline-none"
            className={`"m-4 border-b outline-none", ${className}`}
            type={type}
            placeholder={placeholder}
            {...props}
        />
    )
}

export default InputForm;
