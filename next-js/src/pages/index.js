import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// const API_KEY = "your_api_key_here";

// async function fetchMovieData(movieTitle) {
//   const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(
//     movieTitle
//   )}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

export default function Home({ data }) {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  // const router = useRouter();
  // console.log(data);
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const title = event.target.title.value;
  //   router.push(`/${title}`);
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=e04bdb05&s=${title}`
    );
    const data = await res.json();
    setMovies(data);
    console.log(movies);
  };

  return (
    <>
      <Head>
        <title>Search new movies</title>
        <meta name="title" content="search new movies" />
      </Head>
      <h1>Home page</h1>
      <form onSubmit={handleSubmit}>
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

export async function getServerSideProps(context) {
  const { query } = context;
  // fetch data based on the query parameters
  const res = await fetch(`http://www.omdbapi.com/?apikey=e04bdb05&t=${query}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
