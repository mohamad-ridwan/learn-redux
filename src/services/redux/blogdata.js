import { createSlice } from "@reduxjs/toolkit";

export const blogData = createSlice({
    name: 'blog-data',
    initialState: {
        data: {}
    },
    reducers:{
        getData: (state, action)=>{
            state.data = action.payload.dataBlog
        }
    }
})

export const {getData} = blogData.actions

export default blogData.reducer