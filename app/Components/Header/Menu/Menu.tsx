'use client'

import type {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/app/Redux/store";
import {MenuLinks} from "@/app/Data";
import {ModalWrapper} from "@/app/Components/Modal/ModalWrapper";
import { close } from '@/app/Redux/Features/menu/menuSlice';
import React from "react";
import clsx from "clsx";
import {AuthorizationModalWrapper} from "@/app/Components/Modal/Authorization/AuthorizationModalWrapper";
import {usePathname} from "next/navigation";

export const Menu: FC = () => {
    const pathname = usePathname();
    const auth = useSelector((state: RootState) => state.auth)
    const isMobile = useSelector((state: RootState) => state.menu.isOpen)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <nav className={clsx({
            'flex justify-between items-center text-lg font-light': true,
            'flex-col text-slate-600 gap-10': isMobile
        })}>
            <Link className={clsx({
                'basic-link': true,
                'mr-10': !isMobile,
                'text-xl font-medium': isMobile
            })} href={MenuLinks.products.href}>
                {isMobile ? <span onClick={() => dispatch(close())}>{MenuLinks.products.title}</span> : MenuLinks.products.title}
            </Link>
            <Link
                className={clsx({
                    'basic-link': true,
                    "mr-10 bg-[url('/basket.svg')] bg-no-repeat pl-10 mr-10": !isMobile,
                    'text-xl font-medium': isMobile
                })}
                href={MenuLinks.basket.href}>
                {isMobile ? <span onClick={() => dispatch(close())}>Корзина</span> : 0 + MenuLinks.basket.title}
            </Link>
            <Link className={clsx({
                'basic-link': true,
                'mr-10': !isMobile,
                'text-xl font-medium': isMobile
            })} href={MenuLinks.favorites.href}>
                {isMobile ? <span onClick={() => dispatch(close())}>{MenuLinks.favorites.title}</span> : <Image src={MenuLinks.favorites.icon?.src ?? ''} width={35} height={35} alt={MenuLinks.favorites.title} />}
            </Link>
            {auth.isAuth ?
                <Link className={clsx({
                    'basic-link': true,
                    'text-xl font-medium': isMobile
                })} href={MenuLinks.profile.href}>
                    {isMobile ? <span onClick={() => dispatch(close())}>{MenuLinks.profile.title}</span> : <Image src={MenuLinks.profile.icon?.src ?? ''} width={35} height={35} alt={MenuLinks.profile.title} />}
                </Link> :
                <ModalWrapper actionTitle={
                    <Link href={pathname + '/?modal=true&content=auth'} className={clsx({
                        'basic-link': true,
                        'text-xl font-medium': isMobile
                    })}>
                        {isMobile ? MenuLinks.profile.title : <Image className='basic-link' src={MenuLinks.profile.icon?.src ?? ''} width={35} height={35} alt={MenuLinks.profile.title} />}
                    </Link>
                } title='Войдите или зарегистрируйтесь, чтобы продолжить'>
                    <AuthorizationModalWrapper />
                </ModalWrapper>
            }
        </nav>
    );
}
