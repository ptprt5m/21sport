'use client'

import React, {type FC, type ReactNode, useCallback, useEffect, useState} from 'react';
import {useRouter, useSearchParams} from "next/navigation";

interface IModalWrapperProps {
    actionTitle?: string | ReactNode
    title?: string
    children: ReactNode
}

export const ModalWrapper: FC<IModalWrapperProps> = ({actionTitle, title, children}) => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const isModalOpen = searchParams.get('modal')

    const escFunction = useCallback((event: DocumentEventMap['keydown']) => {
        if (event.key === 'Escape') {
            router.push('/');
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', escFunction, false);

        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
    }, [escFunction]);

    const closeModal = () => {
        router.push('/')
    }

    return (
        <>
            <button>
                {actionTitle ?? 'Открыть'}
            </button>
            {isModalOpen && (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={closeModal}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8 animate-open">
                            <div
                                className="relative w-full max-w-lg p-5 mx-auto bg-white rounded-xl shadow-lg text-black">
                                <button
                                    className="cursor-pointer absolute block py-0.5 px-1.5 bg-white rounded-full border border-gray-400 -right-2 -top-2 text-2xl leading-5 hover:scale-105 transition"
                                    onClick={closeModal}>
                                    &times;
                                </button>
                                <p className="border-b border-gray-400 text-xl pt-1 px-1 pb-5 text-center">{title ?? 'Модальное окно'}</p>
                                <div className='py-2.5 px-1 w-full'>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
