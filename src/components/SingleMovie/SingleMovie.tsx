import React, { useEffect, useState } from "react";
import { MOVIE_INFO } from "../../constants/constants";
import { useSettingsContext } from "../../hooks/useSettingsContext";
import "../../styles/SingleMovie.scss";

import { useLocalStorage } from "../../hooks/useLocalStorage";

interface IParams {
  match: { params: { id?: string | undefined } };
}

interface ISingleMovie {
  title: string;
  plot: string;
  image: string;
}

export type SingleMovieType = {
  title: string;
  plot: string;
  image: string;
};

export const SingleMovie: React.FC<IParams> = (movie) => {
  const [movieData, setMovieData] = useState<ISingleMovie | undefined | any>(
    {}
  );
  const [loading, setLoading] = useState(true);
  const id = movie.match.params.id;

  useEffect(() => {
    setLoading(true);
    fetch(`${MOVIE_INFO}/${process.env.REACT_APP_MOVIES_DB_API_KEY}/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(movieData);

  // const { settings } = useSettingsContext();

  const handleLocalStorage = () => {
    console.log("local storage handle");
  };

  if (loading) {
    return <div>loading...</div>;
  } else {
    const { title, plot, image }: SingleMovieType = movieData;

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
      </div>
    );
  }
};
