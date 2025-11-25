import React from "react";
import type{ InputFormProps } from "../types/form.types";


const InputForm: React.FC<InputFormProps> = ({
    type,
    placeholder,
    register,
    error,
    ...rest

}) => {
    return(
        <div className="flex flex-col gap-2">
            <input 
            type={type}
            placeholder={placeholder}
            {...register}
            {...rest}
            className="border p-2 rounded-md outline-none" />

            {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
    )
}

export default InputForm;
