import {configureStore} from '@reduxjs/toolkit'
import blogData from './blogdata'

export default configureStore({
    reducer: {
        dataBlog: blogData
    }
})