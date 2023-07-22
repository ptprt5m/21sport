'use client'

import {configureStore} from "@reduxjs/toolkit";
import authReducer from './Features/auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch