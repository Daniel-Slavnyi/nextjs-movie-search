import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IMovie } from './movie.types'

export const movieApi = createApi({
    reducerPath: 'api/movies',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com/' }),
    endpoints: build => ({
        getMovies: build.query<IMovie[], string>({
      query: (title: string) => `?apikey=e04bdb05&s=${title}`,
    })
    })
})

export const {useGetMoviesQuery} = movieApi