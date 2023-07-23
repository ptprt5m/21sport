'use client'

import {configureStore} from "@reduxjs/toolkit";
import authReducer from './Features/auth/authSlice';
import menuReducer from './Features/menu/menuSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        menu: menuReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch