import React, { useState } from "react";
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
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="movie__page">
      <div className="section__header">
        <h1>Films page</h1>
        <SearchInput
          loading={loading}
          setLoading={setLoading}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      </div>

      {loading ? <div>loading...</div> : <MoviesCardList data={searchData} />}
    </div>
  );
};
export default FilmsPage;
