import React, { useEffect, useState } from "react";
import { MOVIE_INFO } from "../../constants/constants";
import { useSettingsContext } from "../../hooks/useSettingsContext";
import "../../styles/SingleMovie.scss";

import { useLocalStorage } from "../../hooks/useLocalStorage";

interface IParams {
  match: { params: { id?: string } };
}

type CharacterInMovieType = {
  asCharacter: string;
  id: string;
  image: string;
  name: string;
};

type SaveToFavType = {
  title: string;
  id: string;
  image: string;
  description: string;
};

export type SingleMovieType = {
  title: string;
  plot: string;
  image: string;
  id: string;
  year: string;
  actorList: CharacterInMovieType[];

  contentRating: string;
  directors: string;
  genres: string;
  languages: string;
  metacriticRating: string;

  // similars
};

export const SingleMovie: React.FC<IParams> = (movie) => {
  const [movieData, setMovieData] = useState({} as SingleMovieType);
  const [loading, setLoading] = useState(true);
  const paramsId = movie.match.params.id;

  useEffect(() => {
    setLoading(true);
    fetch(
      `${MOVIE_INFO}/${process.env.REACT_APP_MOVIES_DB_API_KEY}/${paramsId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(movieData);
  const {
    title,
    plot,
    image,
    id,
    year,
    actorList,
    contentRating,
    directors,
    genres,
    languages,
    metacriticRating,
  }: SingleMovieType = movieData;

  const { settings } = useSettingsContext();

  const [localStorageFavourite, setLocalStorageFavourite] = useLocalStorage<
    SaveToFavType[] | null
  >("favouritesMovies");
  console.log(localStorageFavourite);

  let prev = localStorageFavourite as SaveToFavType[];

  const handleLocalStorage = () => {
    console.log("local storage handle");
    if (localStorageFavourite === null) {
      // let prev = localStorageFavourite;
      setLocalStorageFavourite([
        {
          title,
          id,
          image,
          description: year,
        },
      ]);
    } else {
      setLocalStorageFavourite([
        ...prev,
        {
          title,
          id,
          image,
          description: year,
        },
      ]);
    }
  };

  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <div className="single_movie__wrapper">
        <div className="movie_header__section">
          <div className="movie_img__wrapper">
            <img height="400px" src={image} alt="" />
          </div>

          {(settings.showDescription || settings.showTitle) && (
            <p>
              {settings.showTitle && <h1>{title}</h1>}
              {settings.showDescription && <p>{plot}</p>}
            </p>
          )}
        </div>
        <div className="movie__details">
          {settings.showActors && (
            <p className="actor_list__section">
              <h4>Actors list</h4>
              <ul>
                {actorList.map((actor) => {
                  return <li key={actor.id}> {actor.name}</li>;
                })}
              </ul>
            </p>
          )}

          {settings.showRatio && (
            <p className="content_rating__section">
              <h4>Content Rating</h4>
              {contentRating}
            </p>
          )}
          {settings.showDirectors && (
            <p className="directors__section">
              <h4>Directors</h4>
              {directors}
            </p>
          )}
          {settings.showGenres && (
            <p className="genres__section">
              <h4>Genres</h4>
              {genres}
            </p>
          )}
          {settings.showLanguages && (
            <p className="languages__section">
              <h4>Languages</h4>
              {languages}
            </p>
          )}
          {settings.showMetacriticRating && (
            <p className="metacriticRating__section">
              <h4>Metacritic Rating</h4>
              {metacriticRating}/100
            </p>
          )}
        </div>

        {/* <button onClick={handleLocalStorage}>Add to favourite</button>
        <button onClick={() => console.log(localStorageFavourite)}>
          check local storage
        </button>

        <button
          onClick={() => {
            setLocalStorageFavourite(null);
          }}
        >
          clear local storage
        </button> */}
      </div>
    );
  }
};

/*
0:
asCharacter: "Trevor"
id: "nm6016511"
image: "https://imdb-api.com/images/original/MV5BYjM2NmFiNGYtODQ1OC00ZTE5LTg4ZWYtYjFmODk4YmUyZDMzXkEyXkFqcGdeQXVyNjQ3NDAwOTA@._V1_Ratio0.7727_AL_.jpg"
name: "Finn Wolfhard"


*/
