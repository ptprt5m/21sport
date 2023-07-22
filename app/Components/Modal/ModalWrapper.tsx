'use client'

import React, {type FC, type ReactNode, useEffect, useState} from 'react';
import {AuthModal} from "@/app/Components/Modal/AuthModal";
import {useRouter, useSearchParams} from "next/navigation";

interface IModalWrapperProps {
    actionTitle?: string | ReactNode
    title?: string
}

export const ModalWrapper: FC<IModalWrapperProps> = ({ actionTitle, title }) => {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams()
    const isModalOpen = searchParams.get('modal')

    useEffect(() => {
        if (!showModal && !isModalOpen) {
            router.push('/')
        }
    }, [showModal, isModalOpen] )

    const closeModal = () => {
        setShowModal(false)
        router.push('/')
    }

    return (
        <>
            <button onClick={() => setShowModal(true)}>
                {actionTitle ?? 'Открыть'}
            </button>
            {(showModal || isModalOpen) && (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={closeModal}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8 animate-open">
                            <div className="relative w-full max-w-lg p-5 mx-auto bg-white rounded-xl shadow-lg text-black">
                                <button className="cursor-pointer absolute block py-0.5 px-1.5 bg-white rounded-full border border-gray-400 -right-2 -top-2 text-2xl leading-5 hover:scale-105 transition" onClick={closeModal}>
                                    &times;
                                </button>
                                <p className="border-b border-gray-400 text-xl pt-1 px-1 pb-5 text-center">{title ?? 'Модальное окно'}</p>
                                <div className='py-2.5 px-1 w-full'>
                                    <AuthModal />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
