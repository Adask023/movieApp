export type CharacterInMovieType = {
  asCharacter: string;
  id: string;
  image: string;
  name: string;
};

export type SaveToFavType = {
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