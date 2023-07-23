import React, {FC} from 'react';
import {twMerge} from "tailwind-merge";

interface IBasicButtonProps {
    type: "submit" | "reset" | "button"
    title?: string
    className?: string
    disabled?: boolean
}
export const BasicButton: FC<IBasicButtonProps> = ({ type = "button", title = 'Кнопка', className, disabled = false }) => (
    <button type={type} className={twMerge('cursor-pointer my-2.5 py-1.5 px-5 font-medium text-white bg-slate-500 rounded-lg transition duration-300 hover:opacity-70 hover:scale-[0.98]', className)} disabled={disabled}>
        {title}
    </button>
);