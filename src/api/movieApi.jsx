import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const movieBaseUrl = "https://api.themoviedb.org/3/movie"
const apiKey = import.meta.env.VITE_API_MOVIE_API_KEY
export const movieApiSlice =createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({baseUrl: movieBaseUrl}),
    endpoints: (builder) =>({
        getPopularMovies: builder.query({
            query:()=>(`/popular?api_key=${apiKey}`)
        }),
    }),
})
export const {useGetPopularMoviesQuery} = movieApiSlice;