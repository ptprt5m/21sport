'use client'

import type {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/app/Redux/store";
import {MenuLinks} from "@/app/Data";
import {ModalWrapper} from "@/app/Components/Modal/ModalWrapper";
import React from "react";

export const Menu: FC = () => {
    const auth = useSelector((state: RootState) => state.auth)
    return (
        <nav className='flex justify-between items-center text-lg font-light'>
            <Link className='hover:opacity-75 duration-300 transition hover:scale-105 mr-10' href={MenuLinks.products.href}>
                {MenuLinks.products.title}
            </Link>
            <Link className="hover:opacity-75 duration-300 transition hover:scale-105 bg-[url('/basket.svg')] bg-no-repeat pl-10 mr-10" href={MenuLinks.basket.href}>
                {MenuLinks.basket.title}
            </Link>
            <Link className='hover:opacity-75 duration-300 transition hover:scale-105 mr-10' href={MenuLinks.favorites.href}>
                <Image src={MenuLinks.favorites.icon?.src} width={35} height={35} alt={MenuLinks.favorites.title} />
            </Link>



            {auth.isAuth ?
                <Link className='hover:opacity-75 duration-300 transition hover:scale-105' href={MenuLinks.profile.href}>
                    <Image src={MenuLinks.profile.icon?.src} width={35} height={35} alt={MenuLinks.profile.title} />
                </Link> :
                <ModalWrapper actionTitle={
                    <Link href='/?modal=true'>
                        <Image className='hover:opacity-75 duration-300 transition hover:scale-105 cursor-pointer' src={MenuLinks.profile.icon?.src} width={35} height={35} alt={MenuLinks.profile.title} />
                    </Link>
                } title='Войдите или зарегистрируйтесь, чтобы продолжить' />
            }
        </nav>
    );
}
