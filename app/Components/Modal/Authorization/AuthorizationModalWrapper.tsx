'use client'

import React from 'react';
import { AuthModal} from "@/app/Components/Modal/Authorization/AuthModal";
import {RegistrationModal} from "@/app/Components/Modal/Authorization/RegistrationModal";
import {useSearchParams} from "next/navigation";
import {Preloader} from "@/app/Components/Common";

export const AuthorizationModalWrapper = () => {
    const searchParams = useSearchParams()
    const form = searchParams.get('content')

    return (
        <>
            {form === 'auth' ? <AuthModal /> : form === 'reg' ? <RegistrationModal /> : <Preloader />}
        </>
    );
};
