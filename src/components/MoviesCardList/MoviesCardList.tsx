import React from "react";
import { FilmsSearchType } from "../../pages/FilmsPage/FilmsPage";
import { MovieItem } from "./MovieItem/MovieItem";

interface IMovieList {
  data: FilmsSearchType[];
}

export const MoviesCardList: React.FC<IMovieList> = (data) => {
  console.log(data);
  return (
    <>
      <div className="card__container">
        {data.data?.map((movie: FilmsSearchType) => {
          return (
            <div>
              <MovieItem movie={movie} />
            </div>
          );
        })}
      </div>
    </>
  );
};
