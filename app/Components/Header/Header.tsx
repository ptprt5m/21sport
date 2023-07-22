import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {BurgerButton, Menu} from "@/app/Components";
import {CompanyInfo, MenuLinks} from "@/app/Data";

export const Header = () => (
        <header className="bg-[url('/bg.webp')] bg-center bg-no-repeat bg-cover bg-fixed bg-[50%]">
            <div className='bg-[rgba(31,32,33,.85)]'>
                <div className='container'>
                    <div className='mx-3 sm:mx-6 py-3 sm:py-5 md:pt-10 md:pb-16'>
                        <div className='pb-0 md:pb-12 w-full flex justify-between items-center'>
                            <div className='flex items-center'>
                                <Link href='/' className='rounded-full mr-5 duration-300 transition hover:scale-105'>
                                    <Image width={80} height={80} src='/21logo.jpg' className='rounded-full w-14 h-14 sm:w-20 sm:h-20' alt='Логотип'/>
                                </Link>
                                <div className='flex flex-col'>
                                    <h1 className='font-semibold text-2xl leading-snug hidden sm:block'>
                                        {CompanyInfo.name.toUpperCase()}
                                    </h1>
                                    <h2 className='font-light text-lg leading-snug hidden sm:block'>
                                        {CompanyInfo.shortDesc}
                                    </h2>
                                    <h3 className='font-light text-md'>
                                        {CompanyInfo.mainPhoneNumber}
                                    </h3>
                                </div>
                            </div>
                            <div className='hidden lg:block'>
                                <Menu />
                            </div>
                            <div className='block lg:hidden'>
                                <BurgerButton />
                            </div>
                        </div>
                        <h2 className='font-bold text-4xl hidden md:block'>Сейчас в наличии 91 уникальных товаров</h2>
                    </div>
                </div>
            </div>
        </header>
    );