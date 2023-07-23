'use client'

import React, {useState} from 'react';
import { AuthModal} from "@/app/Components/Modal/Authorization/AuthModal";
import {RegistrationModal} from "@/app/Components/Modal/Authorization/RegistrationModal";

export const AuthorizationModalWrapper = () => {
    const [isAuthForm, setIsAuthForm] = useState(true)

    const toggleForm = () => {
        setIsAuthForm(!isAuthForm)
    }

    return (
        <>
            {isAuthForm ?  <AuthModal toggleForm={toggleForm}/> : <RegistrationModal toggleForm={toggleForm}/>}
        </>
    );
};
