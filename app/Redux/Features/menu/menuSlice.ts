import {createSlice} from "@reduxjs/toolkit";

interface IInitialState {
    isOpen: boolean
}

const initialState = {
    isOpen: false
} as IInitialState

export const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        open: (state) => {
            return {
                ...state,
                isOpen: true
            }
        },
        close: () => {
            return initialState
        }
    }
})

export const { open, close } = menu.actions
export default menu.reducer