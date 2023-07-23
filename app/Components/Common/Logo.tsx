import React from 'react';
import Image from "next/image";
import {twMerge} from "tailwind-merge";

export const Logo = ({ size = 80, className }: { size: number, className?: string }) => <Image width={size} height={size} src='/21logo.jpg' className={twMerge('rounded-full w-10 h-10 sm:w-20 sm:h-20', className)} alt='Логотип'/>
