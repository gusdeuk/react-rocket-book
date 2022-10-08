import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogged: false,
    randomSessionId: Math.floor(Math.random() * 100).toString()
}

export const appGlobalDataSlice = createSlice({
    name: 'appGlobalData',
    initialState,
    reducers: {
        setIsLogged: (state, showBool) => {
            state.isLogged = showBool.payload
        },
        setOtherThing: (state, showString) => {
            state.otherThing = showString.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setIsLogged, setOtherThing } = appGlobalDataSlice.actions

export default appGlobalDataSlice.reducer
