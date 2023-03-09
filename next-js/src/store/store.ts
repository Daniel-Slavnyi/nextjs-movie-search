import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./movie/movie.api";
import titleReducer from './title/title.slice'

export const store = configureStore({
    reducer: { [movieApi.reducerPath]: movieApi.reducer , title: titleReducer},

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(movieApi.middleware)
    
})

export type TypeRootState = ReturnType<typeof store.getState>