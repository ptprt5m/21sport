'use client'

import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "@/app/Redux/store";
import {getMe, logIn, logOut} from "@/app/Redux/Features/auth/authSlice";
import {useEffect} from "react";
import {api} from "@/app/pages/api";

export default function Home() {
    const auth = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        api.getMe()
    }, [])

    return (
        <>
            <div className={auth.isAuth ? 'hidden' : 'block'}>
                <p>Не авторизованы</p>
            </div>
            <div className={auth.isAuth ? 'block' : 'hidden'}>
                <p>
                    Username: {auth.firstName}
                </p>
                <p>
                    LastName: {auth.lastName}
                </p>
                <p>
                    Sex: {auth.sex}
                </p>
                <p>
                    MiddleName: {auth.phoneNumber}
                </p>
            </div>
            <button className='bg-white text-black p-5 m-5' onClick={() => dispatch(logIn({
                lastName: 'Sheglov',
                firstName: 'Roman',
                sex: 'Male',
                phoneNumber: 8900
            }))}>
                login
            </button>
            <button className='bg-white text-black p-5 m-5' onClick={() => dispatch(logOut())}>
                logout
            </button>
        </>
    )
}
