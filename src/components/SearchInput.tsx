import React, { Dispatch, SetStateAction, useState } from "react";
import { MOVIE_SEARCH_URL } from "../constants/constants";
import { FilmsSearchType } from "../pages/FilmsPage/FilmsPage";
import { MovieItem } from "./MovieItem/MovieItem";

interface IProps {
  searchData: FilmsSearchType[];
  setSearchData: Dispatch<SetStateAction<FilmsSearchType[]>>;
}

const SearchInput: React.FC<IProps> = ({ searchData, setSearchData }) => {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    console.log(`api key: ${process.env.REACT_APP_MOVIES_DB_API_KEY}`);
    fetch(
      `${MOVIE_SEARCH_URL}/${process.env.REACT_APP_MOVIES_DB_API_KEY}/${query}`
    )
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        setLoading(false);
        setSearchData(data.results);
      })
      .catch((e) => console.log(`error: ${e}`));

    console.log(`search query send: ${query}`);
    // setSearchData()
    setQuery("");
  };

  if (loading) return <div>loading..</div>;
  
  console.log(searchData);
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Szukaj</button>
      </form>

      {searchData?.map((movie: FilmsSearchType) => {
        return (
          <div>
            <MovieItem movie={movie} />
          </div>
        );
      })}
    </div>
  );
};
//  do naprawy requesty

export default SearchInput;
