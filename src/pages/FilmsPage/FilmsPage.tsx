import React, { useState } from "react";
import { MovieItem } from "../../components/MoviesCardList/MovieItem/MovieItem";
import { MoviesCardList } from "../../components/MoviesCardList/MoviesCardList";
import SearchInput from "../../components/SearchInput";
import "../../styles/FilmsPage.scss";

export type FilmsSearchType = {
  description: string;
  id: string;
  image: string;
  resultType: string;
  title: string;
};

const FilmsPage: React.FC = () => {
  const [searchData, setSearchData] = useState([] as FilmsSearchType[]);
  return (
    <div className="movie__page">
      <div className="section__header">
        <h1>Films page</h1>
        <SearchInput searchData={searchData} setSearchData={setSearchData} />
      </div>

      <MoviesCardList data={searchData} />
    </div>
  );
};
export default FilmsPage;
