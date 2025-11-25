import type { InputHTMLAttributes, ButtonHTMLAttributes } from "react";


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
}