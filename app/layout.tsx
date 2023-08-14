import './globals.css'
import './style.scss'
import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import { Header} from "@/app/Components";
import type {ReactNode} from "react";
import {GlobalProvider} from "@/app/Redux/provider";
import React from "react";

const montserrat = Montserrat({
    subsets: ['cyrillic', 'latin'],
    weight: ['300', '400', '500', '600', '700'],
    fallback: ['Roboto', 'sans-serif']
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <GlobalProvider>
            <body className={montserrat.className}>
                <Header/>
                <main>{children}</main>
                <footer>lolo</footer>
            </body>
        </GlobalProvider>
        </html>
    )
}
