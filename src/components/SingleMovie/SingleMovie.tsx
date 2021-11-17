import React, { useEffect, useState } from "react";
import { MOVIE_INFO } from "../../constants/constants";

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
  const [movieData, setMovieData] = useState<ISingleMovie | undefined>(
    {} as SingleMovieType | undefined
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

  if (loading) {
    return <div>loading...</div>;
  } else {
    const {
      title,
      plot,
      image,
    }: { title: string; plot: string; image: string } = movieData;

    return (
      <div>
        <h1>{title}</h1>
        <p>{plot}</p>
        <img height="300px" src={image} alt="" />
      </div>
    );
  }
};
