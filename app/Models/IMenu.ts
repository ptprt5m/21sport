export interface IMenu {
    products: IMenuLinks,
    basket: IMenuLinks,
    favorites: IMenuLinks,
    profile: IMenuLinks,
}

export interface IMenuLinks {
    title: string
    href: string
    className?: string
    icon?: {
        src: string
        width?: number
        height?: number
    }
}