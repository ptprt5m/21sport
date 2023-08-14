import React, {type FC} from 'react';
import {twMerge} from "tailwind-merge";

interface IBasicButtonProps {
    type: "submit" | "reset" | "button"
    title?: string
    className?: string
    disabled?: boolean
}
export const BasicButton: FC<IBasicButtonProps> = ({ type = "button", title = 'Кнопка', className, disabled = false }) => (
    <button type={type} className={twMerge('basic-link my-2.5 py-1.5 px-5 font-medium text-white bg-slate-500 rounded-lg', className)} disabled={disabled}>
        {title}
    </button>
);