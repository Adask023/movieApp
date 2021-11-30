import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { FilmsSearchType } from "../../../pages/FilmsPage/FilmsPage";

interface Props {
  movie: FilmsSearchType;
}


export const MovieItem: React.FC<Props> = ({ movie }) => {
  return (
    <Link
      to={{ pathname: `${ROUTES.FILMS}/${movie.id}`, state: movie }}
      key={movie.id}
    >
      <figure>
        <figcaption>
          <h4>{movie.title}</h4>
          <p>{movie.description}</p>
        </figcaption>

        <div className="card_ing__wrapper">
          <img src={movie.image} alt={movie.title} height="100%" />
        </div>
      </figure>
    </Link>
  );
};
