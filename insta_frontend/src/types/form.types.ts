import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export interface InputFormProps extends InputHTMLAttributes<HTMLInputElement>{
    type: string;
    placeholder: string;
    register: UseFormRegisterReturn;
    error?: string;
}