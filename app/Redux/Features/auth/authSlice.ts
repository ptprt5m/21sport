import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "@/app/pages/api";
export interface AuthState {
    isAuth: boolean,
    isAuthFetching: boolean,
    id: null,
    createdAt: null,
    updatedAt: null,
    email: null,
    firstName: null,
    lastName: null,
    phoneNumber: null,
    city: null,
    pointOfIssue: null,
    role: null
    error: string | null;
}

const initialState = {
    isAuth: false,
    isAuthFetching: false,
    id: null,
    createdAt: null,
    updatedAt: null,
    email: null,
    firstName: null,
    lastName: null,
    phoneNumber: null,
    city: null,
    pointOfIssue: null,
    role: null,
    error: null
} as AuthState

export const getMe = createAsyncThunk(
    'auth/login',
    async () => {
        try {
            const response = await api.getMe();

            return response;
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}: { email: string; password: string }) => {
        try {
            const response = await api.login({email, password});
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    }
);

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },
        logIn: (state, action: PayloadAction<AuthState>) => {
            return {
                ...state,
                isAuth: true,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                phoneNumber: action.payload.phoneNumber,
            }
        },
        toggleIsFetching: (state, action) => {
            return {
                ...state,
                isAuthFetching: action.payload
            }
        }
    },
})

export const { logOut, logIn, toggleIsFetching } = auth.actions

export default auth.reducer