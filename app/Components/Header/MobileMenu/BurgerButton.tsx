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
                    'button-burger_close': !isOpen,
                    'button-burger_open': isOpen,
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
