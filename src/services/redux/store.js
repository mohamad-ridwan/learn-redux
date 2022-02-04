import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export default configureStore({
    reducer:{
        bangsat: counterReducer
    },
})