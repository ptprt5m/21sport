'use client'

import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "@/app/Redux/store";
import {logIn, logOut} from "@/app/Redux/Features/auth/authSlice";

export default function Home() {
    const auth = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
            <div className={auth.isAuth ? 'hidden' : 'block'}>
                <p>Не авторизированы</p>
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
            <button onClick={() => dispatch(logIn({
                lastName: 'Sheglov',
                firstName: 'Roman',
                sex: 'Male',
                phoneNumber: 8900
            }))}>
                login
            </button>
            <button onClick={() => dispatch(logOut())}>
                logout
            </button>
        </>
    )
}
