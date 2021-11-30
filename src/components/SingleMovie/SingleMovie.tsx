import React, { useEffect, useState } from "react";
import { MOVIE_INFO } from "../../constants/constants";
import { useSettingsContext } from "../../hooks/useSettingsContext";
import "../../styles/SingleMovie.scss";

import { useLocalStorage } from "../../hooks/useLocalStorage";

interface IParams {
  match: { params: { id?: string } };
}

export type SingleMovieType = {
  title: string;
  plot: string;
  image: string;
  id: string;
  year: string;
};

type SaveToFavType = {
  title: string;
  id: string;
  image: string;
  description: string;
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
  const { title, plot, image, id, year }: SingleMovieType = movieData;

  // const { settings } = useSettingsContext();

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

          <p>
            <h1>{title}</h1>
            <p>{plot}</p>
          </p>
        </div>
        <div className="movie__details">
          {/* {settingsState.settings.map((informationItem: any) => {
            return(
              <p>
                {movieData[informationItem.settingName]}
              </p>
            )
          })} */}
        </div>
        <button onClick={handleLocalStorage}>Add to favourite</button>
        <button onClick={() => console.log(localStorageFavourite)}>
          check local storage
        </button>

        <button
          onClick={() => {
            setLocalStorageFavourite(null);
          }}
        >
          clear local storage
        </button>
      </div>
    );
  }
};
