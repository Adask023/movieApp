import React from "react";
import { MoviesCardList } from "../../components/MoviesCardList/MoviesCardList";

export const FavouritePage: React.FC = () => {
  const localFavouriteMovies = JSON.parse(
    localStorage.getItem("favouriteMovies") as string
  );

  return (
    <div className="movie__page">
      Favourite films
      {localFavouriteMovies && <MoviesCardList data={localFavouriteMovies} />}
    </div>
  );
};
