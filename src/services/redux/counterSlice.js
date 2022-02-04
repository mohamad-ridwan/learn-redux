import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'hitung',
    initialState: {
        nilai: 0,
        data: []
    },
    reducers: {
        increment: (state)=>{
            state.nilai += 1
        },
        decrement: (state)=>{
            state.nilai -= 1
        },
        incrementByAmount: (state, action)=>{
            state.nilai += action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer