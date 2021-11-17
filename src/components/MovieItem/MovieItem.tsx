import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { FilmsSearchType } from "../../pages/FilmsPage/FilmsPage";

interface Props {
  movie: FilmsSearchType;
}


export const MovieItem: React.FC<Props> = ({ movie }) => {
  return (
    <Link to={{pathname:`${ROUTES.FILMS}/${movie.id}`, state: movie}} key={movie.id}>
      <h3>
        {movie.title}
        {movie.description}
      </h3>
      <img src={movie.image} alt={movie.title} height="200px" />
    </Link>
  );
};
