import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState:{title:string} = {title: ""} 


export const titleSlice = createSlice({
    name: "title",
    initialState,
    reducers: {
        getTitle(state, action:PayloadAction<string>) {
            state.title = action.payload 
        }  
    }
    
})

const { actions, reducer } = titleSlice;

export const { getTitle } = actions;

export default reducer;