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
            className="mt-3 border p-2 rounded-md outline-none"
            type={type}
            placeholder={placeholder}
            {...props}
        />
    )
}

export default InputForm;
