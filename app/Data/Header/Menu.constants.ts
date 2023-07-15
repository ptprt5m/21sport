import type {IMenu} from "@/app/Models";

export const MenuLinks: IMenu['links'] = [
    {
        title: 'Ассортимент',
        href: '/products',
        className: 'mr-10',
    },
    {
        title: '10 000 руб.',
        href: '/basket',
        className: "bg-[url('/basket.svg')] bg-no-repeat pl-10 mr-10",
    },
    {
        title: 'Избранное',
        href: '/favorites',
        className: 'mr-10',
        icon: {
            src: './favorites.svg',
        }
    },
    {
        title: 'Профиль',
        href: '/profile',
        icon: {
            src: './profile.svg'
        }
    }
]