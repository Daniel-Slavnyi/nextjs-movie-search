import { Box, Container } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import ListOfMovie from "../../components/ListOfMovie/ListOfMovie";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SearchInput from "../../components/SearchInput/SearchInput";

interface MyPageProps {
  Search: MyData[];
  totalResults: string;
}

interface MyData {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieData {
  Search: [];
}

export const Movie: React.FC<MyPageProps> = ({ Search,totalResults }) => {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState<MyData[]>(Search);
  const [totalResult, setTotalResult] = useState(0)
  const [page, setPage] = useState(1)

  console.log('data =>', responseData);
  console.log('total =>', totalResult);
  console.log('page =>', page);

const handlePagination = async (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const res = await fetch(`/api/getMovie?inputValue=${inputValue}&page=${value}`);
    const data = await res.json();
    setResponseData(data.Search);
  };

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch(`/api/getMovie?inputValue=${inputValue}&page=${page}`);
    const data = await res.json();
    setResponseData(data.Search);
    setTotalResult(data.totalResults)
  };


  return (
    <>
      <Head>
        <title>Search new movies</title>
        <meta name="title" content="search new movies" />
      </Head>
      <Container>
        <SearchInput/>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <h1>Movie page</h1>
          {totalResult !== 0 && <p>Total: {totalResult }</p>}
        </Box>
        <form onSubmit={handleSubmit}>
          <label>
            Введите название фильма:
            <input
              value={inputValue}
              type="text"
              name="title"
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Найти фильмы</button>
          {<ListOfMovie responseData={responseData } />}
        </form>
        {responseData?.length > 0 &&
          <Stack  spacing={4}>
             <Pagination sx={{ display: 'flex', justifyContent: 'center' }} count={totalResult} color="primary" onChange={handlePagination} />
          </Stack>}
      </Container>
    </>
  );
}

export default Movie
