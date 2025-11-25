import type { ButtonProps } from "../types/form";

const Button = ({ text }: ButtonProps) => {
    return (
        <button className="bg-blue text-white px-4 py-2 rounded-md">
            {text}
        </button>
    );
};

export default Button;
