import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MOST_POPULAR } from "../../constants/constants";
import { ROUTES } from "../../constants/routes";
import useFetch from "../../hooks/useFetch";
import "../../styles/HomePage.scss";

export type PopularMovieType = {
  crew: string;
  fullTitle: string;
  id: string;
  imDbRating: string;
  image: string;
  rank: string;
  rankUpDown: string;
  title: string;
  year: string;
};

export interface IPopularMovies {
  items: PopularMovieType[];
  errorMessage: string;
}

export const HomePage: React.FC = () => {
  const [moviesData, setMoviesData] = useState({} as IPopularMovies);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(false);
    fetch(`${MOST_POPULAR}/${process.env.REACT_APP_MOVIES_DB_API_KEY}`)
      .then((resp) => resp.json())
      .then((data) => {
        setMoviesData(data);
        setDone(true);
      });
  }, []);

  if (!done) {
    return <div>loading...</div>;
  }

  const { items } = moviesData;
  console.log(items);
  return (
    <div className="popular__page">
      <h1 >Popular Movies</h1>

      <div className="content">
        <div className="popular_movies__container">
          {items.map((popularMovie) => {
            return (
              <Link
                to={{
                  pathname: `${ROUTES.FILMS}/${popularMovie.id}`,
                  state: popularMovie,
                }}
                key={popularMovie.id}
              >
                <div className="popular_movie__wrapper">
                  <figure>
                    <img src={popularMovie.image} alt="" />
                    <figcaption>{popularMovie.title} </figcaption>
                  </figure>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
