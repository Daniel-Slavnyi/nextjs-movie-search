import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState, FormEvent } from "react";
import { useGetMoviesQuery } from "../store/movie/movie.api";


interface MovieData {
  Search: [];
}

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [movies, setMovies] = useState<MovieData>({ Search: [] });
  const {data, isLoading, error} = useGetMoviesQuery('avatar')

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const res = await fetch(
  //     `http://www.omdbapi.com/?apikey=e04bdb05&s=${title}`
  //   );
  //   const data = await res.json();
  //   setMovies(data);
  //   console.log(movies);
  // };

  return (
    <>
      <Head>
        <title>Search new movies</title>
        <meta name="title" content="search new movies" />
      </Head>
      <h1>Home page</h1>
      <form >
        <label>
          Введите название фильма:
          <input
            type="text"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <button type="submit">Найти фильмы</button>
      </form>
    </>
  );
}

