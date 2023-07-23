'use client';

import type {FC} from 'react';
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/app/Redux/store";
import { open, close } from '@/app/Redux/Features/menu/menuSlice';

export const BurgerButton: FC = () => {
    const isOpen = useSelector((state: RootState) => state.menu.isOpen)
    const dispatch = useDispatch<AppDispatch>()

    const toggleMobileMenu = () => {
        if (isOpen) {
            dispatch(close())
            return
        }
        dispatch(open())
        return
    }

    return (
        <div className='flex relative lg:hidden'>
            <div
                className={clsx({
                    'space-y-1.5 [&>*:nth-child(1)]:w-1/2 [&>*:nth-child(3)]:w-4/5': !isOpen,
                    '[&>*:nth-child(1)]:origin-bottom [&>*:nth-child(1)]:rotate-45 [&>*:nth-child(1)]:translate-y-0.5 [&>*:nth-child(2)]:origin-top [&>*:nth-child(2)]:-rotate-45 [&>*:nth-child(3)]:origin-bottom [&>*:nth-child(3)]:w-1/2 [&>*:nth-child(3)]:rotate-45 [&>*:nth-child(3)]:translate-x-3.5': isOpen,
                })}
                onClick={toggleMobileMenu}
            >
                {[...Array(3)].map((_, index) => (
                    <span key={index} className={clsx({
                        'block h-1 w-8 rounded-xl transition': true,
                        'bg-slate-300': !isOpen,
                        'bg-slate-600': isOpen
                    })}></span>
                ))}
            </div>
        </div>
    );
};
