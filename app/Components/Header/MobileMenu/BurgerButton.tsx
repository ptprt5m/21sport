'use client';

import {type FC, useState} from 'react';
import clsx from "clsx";

export const BurgerButton: FC = () => {
    //TODO: remove this logic to redux
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <div className='flex lg:hidden'>
            <div
                className={clsx({
                    'space-y-1.5 [&>*:nth-child(1)]:w-1/2 [&>*:nth-child(3)]:w-4/5': !mobileMenu,
                    '[&>*:nth-child(1)]:origin-bottom [&>*:nth-child(1)]:rotate-45 [&>*:nth-child(1)]:translate-y-0.5 [&>*:nth-child(2)]:origin-top [&>*:nth-child(2)]:-rotate-45 [&>*:nth-child(3)]:origin-bottom [&>*:nth-child(3)]:w-1/2 [&>*:nth-child(3)]:rotate-45 [&>*:nth-child(3)]:translate-x-3.5': mobileMenu,
                })}
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {[...Array(3)].map((_, index) => (
                    <span key={index} className='block h-1 w-8 rounded-xl bg-slate-300 transition'></span>
                ))}
            </div>
        </div>
    );
};
