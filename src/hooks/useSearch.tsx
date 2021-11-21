import { useEffect, useState } from "react";
import { MOVIE_SEARCH_URL } from "../constants/constants";
import { FilmsSearchType } from "../pages/FilmsPage/FilmsPage";

function useSearch(query: string) {
  const [data, setData] = useState([] as FilmsSearchType[]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(
      `${MOVIE_SEARCH_URL}/${process.env.REACT_APP_MOVIES_DB_API_KEY}/${query}`
    )
      .then((resp) => resp.json())
      .then((d) => {
        setData(d.results);
        setDone(true);
      })
      .catch((e) => console.log(e));
  }, [query]);

  return {
    data,
    done,
  };
}

export default useSearch;
