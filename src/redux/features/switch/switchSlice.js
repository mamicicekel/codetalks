import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    switchEnabled: false,
}

export const switchSlice = createSlice({
    name: "switch",
    initialState,
    reducers: {
        isEnabled: (state) => {
            state.switchEnabled = !state.switchEnabled
        },
    },
})

export const { isEnabled } = switchSlice.actions

export default switchSlice.reducer