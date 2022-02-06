import {createSlice} from '@reduxjs/toolkit'

export const form = createSlice({
    name: 'form',
    initialState:{
        data : {
            name: '',
            age: '',
            address: ''
        }
    },
    reducers:{
        submitForm : (state, action)=>{
            const {name, age, address} = action.payload.data

            state.data.name = name
            state.data.age = age
            state.data.address = address
        }
    }
})

export const {submitForm} = form.actions

export default form.reducer