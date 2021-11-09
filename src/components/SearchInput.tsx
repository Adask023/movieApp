import React, { Dispatch, SetStateAction, useState } from "react";
import { MOVIE_SEARCH_URL } from "../constants/constants";
// import {MOVIES_DB_API_KEY} from '../../env'

interface IProps {
  searchData: object | undefined | any;
  setSearchData: Dispatch<SetStateAction<object>>;
}

const SearchInput: React.FC<IProps> = ({ searchData, setSearchData }) => {
  const [query, setQuery] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // fetch(`${MOVIE_SEARCH_URL}/${process.env.MOVIES_DB_API_KEY}/${query}`)
    fetch(`${MOVIE_SEARCH_URL}/k_711l06me/${query}`)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => setSearchData(data.results))
      .catch((e) => console.log(`error: ${e}`));

    console.log(`search query send: ${query}`);
    setQuery("");
  };

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

      {/* {searchData?.map((movie) => {
        console.log(movie);
      })} */}
    </div>
  );
};
//  do naprawy requesty

export default SearchInput;
