import React from 'react';

export const FormField = ({ type = 'text', name, id, onChange, onBlur, value, required = true, label, errors }) => (
    <div className='mb-6 max-w-sm w-full text-center'>
        <div className='relative'>
            <input
                type={type}
                name={name}
                id={id}
                required={required}
                placeholder=' '
                className='w-full rounded-lg border border-gray-700 py-2 px-5 appearance-none bg-transparent focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            <label className='absolute bg-white text-gray-700 text-md left-4 px-2 pointer-events-none top-2.5 duration-300 transform -translate-y-6 scale-75 z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor={id}>{label}</label>
        </div>
        <span className='modal-error'>{errors}</span>
    </div>
)
