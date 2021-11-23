import React, { useEffect, useState } from "react";
import { MOST_POPULAR } from "../../constants/constants";
import { useFetch } from "../../hooks/useFetch";

export const HomePage: React.FC = () => {
  const [moviesData, setMoviesData] = useState();

  // setMoviesData(
    // useFetch(`${MOST_POPULAR}/${process.env.REACT_APP_MOVIES_DB_API_KEY}`)
  // );
  // setMoviesData(data)

  // console.log(data);
  return <div>Trendings films Popular</div>;
};
