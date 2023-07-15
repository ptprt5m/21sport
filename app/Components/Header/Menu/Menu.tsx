import type {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import type {IMenu} from "@/app/Models";

export const Menu: FC<IMenu> = ({ links }) => (
    <nav className='flex justify-between items-center text-lg font-light'>
        {links.map((link) => {
            return <Link key={link.title} className={`hover:opacity-75 duration-300 transition hover:scale-105 ${link.className}`} href={link.href}>
                {link.icon ? <Image src={link.icon.src} width={35} height={35} alt={link.title} /> : link.title }
            </Link>
        })}
    </nav>
);
