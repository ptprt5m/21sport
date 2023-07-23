'use client'

import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/app/Redux/store";
import {Menu} from "@/app/Components/Header/Menu/Menu";
import {Logo} from "@/app/Components/Common/Logo";
import { close } from '@/app/Redux/Features/menu/menuSlice';
import Link from "next/link";

export const MobileMenu = () => {

    const isOpen = useSelector((state: RootState) => state.menu.isOpen)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
            {isOpen && <div className='absolute top-0 left-0 w-screen h-screen p-6 bg-white animate-fromBottomToTop'>
                <div className='absolute text-center top-[20%] left-[20%] right-[20%]'>
                    <Link href='/' onClick={() => dispatch(close())} className='basic-link rounded-full flex flex-col items-center mb-10 drop-shadow-xl'>
                        <Logo size={80} className='w-20 h-20' isMobile={isOpen} />
                    </Link>
                    <Menu isMobile />
                </div>
            </div>}
        </>
    );
};
