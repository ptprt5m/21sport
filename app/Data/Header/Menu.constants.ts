import type {IMenu} from "@/app/Models";

export const MenuLinks: IMenu = {
    products: {
        title: 'Ассортимент',
        href: '/products',
    },
    basket: {
        title: 'руб.',
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
