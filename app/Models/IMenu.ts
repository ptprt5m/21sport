export interface IMenu {
    links: Array<IMenuLinks>
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