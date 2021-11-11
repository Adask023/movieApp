import React from "react";
import { FilmsSearchType } from "../../pages/FilmsPage/FilmsPage";

interface Props {
  movie: FilmsSearchType;
}

export const MovieItem: React.FC<Props> = ({ movie }) => {
  return (
    <a href="/" key={movie.id}>
      <h3>{movie.title}{movie.description}</h3>
      <img src={movie.image} alt={movie.title} height="200px" />
    </a>
  );
};
