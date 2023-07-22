import type {IMenu} from "@/app/Models";

export const MenuLinks: IMenu = {
    products: {
        title: 'Ассортимент',
        href: '/products',
    },
    basket: {
        title: '10 000 руб.',
        href: '/basket',
    },
    favorites: {
        title: 'Избранное',
        href: '/favorites',
        icon: {
            src: './favorites.svg',
        }
    },
    profile: {
        title: 'Профиль',
        href: '/profile',
        icon: {
            src: './profile.svg'
        }
    }
}
