'use client'

import React, {useState} from 'react';
import {Formik} from "formik";
import Image from "next/image";
import helloIcon from "../../../../public/emoji/hello.png"
import {BasicButton} from "@/app/Components/Common";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const RegistrationModal = () => {
    const pathname = usePathname();
    const [error, setError] = useState('')
    return (
        <div className='mt-5 flex flex-col w-full h-auto items-center'>
            <div className='flex mb-5'>
                <h2 className='text-3xl font-semibold'>Регистрация</h2>
                <Image className='ml-2.5' width={40} height={40} src={helloIcon} alt="Авторизация"/>
            </div>
            <span className='text-base font-normal text-red-500'>{error}</span>
            <Formik
                initialValues={{ email: '', password: '', password_confirm: '', firstName: '' }}
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
                        errors.password = 'Поле пароль обязательно'
                    } else if (values.password.length < 8) {
                        errors.password = 'Поле пароль должно быть больше 8 символов'
                    }
                    if (!values.password_confirm) {
                        errors.password_confirm = 'Поле подтверждения пароля обязательно'
                    } else if (values.password !== values.password_confirm) {
                        errors.password_confirm = 'Пароли не совпадают'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    signUp(values).then(statusCode => setError(statusCode))
                    setSubmitting(false);
                    return navigate("/profile")
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
                                    id="email_reg"
                                    required
                                    placeholder=' '
                                    className='w-full rounded-lg border border-gray-700 py-2 px-5 appearance-none bg-transparent focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <label className='absolute bg-white text-gray-700 text-md left-4 px-2 pointer-events-none top-2.5 duration-300 transform -translate-y-6 scale-75 z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor="email_reg">Email</label>
                            </div>
                            <span className='modal-error'>{errors.email && touched.email && errors.email}</span>
                        </div>
                        <div className='mb-6 max-w-sm w-full text-center'>
                            <div className='relative'>
                                <input
                                    type="password"
                                    name="password"
                                    id="pass_reg"
                                    required
                                    placeholder=' '
                                    className='w-full rounded-lg border border-gray-700 py-2 px-5 appearance-none bg-transparent focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <label className='absolute bg-white text-gray-700 text-md left-4 px-2 pointer-events-none top-2.5 duration-300 transform -translate-y-6 scale-75 z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor="pass_reg">Пароль</label>
                            </div>
                            <span className='modal-error'>{errors.password && touched.password && errors.password}</span>
                        </div>
                        <div className='mb-6 max-w-sm w-full text-center'>
                            <div className='relative'>
                                <input
                                    type="password"
                                    name="password_confirm"
                                    id="pass_conf"
                                    required
                                    placeholder=' '
                                    className='w-full rounded-lg border border-gray-700 py-2 px-5 appearance-none bg-transparent focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password_confirm}
                                />
                                <label className='absolute bg-white text-gray-700 text-md left-4 px-2 pointer-events-none top-2.5 duration-300 transform -translate-y-6 scale-75 z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor="pass_conf">Повторите пароль</label>
                            </div>
                            <span className='modal-error'>{errors.password_confirm && touched.password_confirm && errors.password_confirm}</span>
                        </div>
                        <div className='mb-6 max-w-sm w-full text-center'>
                            <div className='relative'>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="reg_firstName"
                                    placeholder=' '
                                    className='w-full rounded-lg border border-gray-700 py-2 px-5 appearance-none bg-transparent focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                />
                                <label className='absolute bg-white text-gray-700 text-md left-4 px-2 pointer-events-none top-2.5 duration-300 transform -translate-y-6 scale-75 z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor="reg_firstName">Имя</label>
                            </div>
                        </div>
                        <Link href={pathname + '/?modal=true&content=auth'} className='mb-3.5 basic-link'>Уже есть аккаунт? Войдите</Link>
                        <BasicButton type='submit' disabled={isSubmitting} title='Создать аккаунт' className='bg-blue-600' />
                    </form>
                )}
            </Formik>
        </div>
    );
};
