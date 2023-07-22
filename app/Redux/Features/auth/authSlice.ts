import {createSlice, PayloadAction} from "@reduxjs/toolkit";
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
    role: null
} as AuthState

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },
        logIn: (state, action: PayloadAction<AuthState>) => {
            debugger
            return {
                ...state,
                isAuth: true,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                phoneNumber: action.payload.phoneNumber
            }
        },
        toggleIsFetching: (state, action) => {
            return {
                ...state,
                isAuthFetching: action.payload
            }
        }
    }
})

export const { logOut, logIn, toggleIsFetching } = auth.actions

export default auth.reducer