import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import form from './form'

export default configureStore({
    reducer:{
        bangsat: counterReducer,
        dataForm: form
    },
})