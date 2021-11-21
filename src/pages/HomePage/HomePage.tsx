import React from "react";
import { MOST_POPULAR } from "../../constants/constants";
import { useFetch } from "../../hooks/useFetch";

export const HomePage: React.FC = () => {
  // const data = useFetch(
  //   `${MOST_POPULAR}/${process.env.REACT_APP_MOVIES_DB_API_KEY}`
  // );

  // console.log(data)
  return <div>Trendings films Popular</div>;
};
