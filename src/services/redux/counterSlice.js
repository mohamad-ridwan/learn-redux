import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'hitung',
    initialState: {
        nilai: 0,
        data: []
    },
    reducers: {
        increment: (state, action)=>{
            state.nilai += action.payload.action
        },
        decrement: (state, action)=>{
            state.nilai -= 1
        },
    }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer