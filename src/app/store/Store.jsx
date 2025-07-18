import {configureStore} from "@reduxjs/toolkit";
import {movieApiSlice} from "../../api/movieApi.jsx";


export const store = configureStore({
    reducer: {
        [movieApiSlice.reducerPath]: movieApiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>(
        getDefaultMiddleware().concat(movieApiSlice.middleware)
    )
})
