'use client'

import React, {useState} from 'react';
import {Formik} from "formik";
import Image from "next/image";
import helloIcon from "../../../../public/emoji/hello.png"
import {BasicButton} from "@/app/Components/Common";
import Link from "next/link";

export const AuthModal = ({ toggleForm }) => {
    const [error, setError] = useState('')
    return (
        <div className='mt-5 flex flex-col w-full h-auto items-center'>
            <div className='flex mb-5'>
                <h2 className='text-3xl font-semibold'>Авторизация</h2>
                <Image className='ml-2.5' width={40} height={40} src={helloIcon} alt="Авторизация"/>
            </div>
            <span className='text-base font-normal text-red-500'>{error}</span>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Поле email обязательно';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Некорректный email адрес';
                    }
                    if (!values.password) {
                        errors.password = 'Поле Пароль обязательно';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    signIn(values).then(statusCode => {
                        if (statusCode === 'Успешно!') {
                            navigate("/profile")
                        }
                        setError(statusCode)
                    })
                    setSubmitting(false);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit} className='mt-5 flex flex-col w-full items-center'>
                        <div className='mb-6 max-w-sm w-full text-center'>
                            <div className='relative'>
                                <input
                                    type="email"
                                    name="email"
                                    id="email_auth"
                                    required
                                    placeholder=' '
                                    className='w-full rounded-lg border border-gray-700 py-2 px-5 appearance-none bg-transparent focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <label className='absolute bg-white text-gray-700 text-md left-4 px-2 pointer-events-none top-2.5 duration-300 transform -translate-y-6 scale-75 z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor="email_auth">Email</label>
                            </div>
                            <span className='modal-error'>{errors.email && touched.email && errors.email}</span>
                        </div>
                        <div className='mb-6 max-w-sm w-full text-center'>
                            <div className='relative'>
                                <input
                                    type="password"
                                    name="password"
                                    id="pass_auth"
                                    required
                                    placeholder=' '
                                    className='w-full rounded-lg border border-gray-700 py-2 px-5 appearance-none bg-transparent focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <label className='absolute bg-white text-gray-700 text-md left-4 px-2 pointer-events-none top-2.5 duration-300 transform -translate-y-6 scale-75 z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor="pass_auth">Пароль</label>
                            </div>
                            <span className='modal-error'>{errors.password && touched.password && errors.password}</span>
                        </div>
                        <Link href='/?modal=true&content=reg' className='mb-3.5 basic-link'>Нет аккаунта? Зарегистрируйтесь</Link>
                        <BasicButton type='submit' disabled={isSubmitting} title='Войти' className='bg-green-600' />
                    </form>
                )}
            </Formik>
        </div>
    );
};