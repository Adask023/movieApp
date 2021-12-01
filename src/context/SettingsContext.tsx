import { createContext } from "react";

export type settingsType = {
  [key: string]: any;
  showTitle: boolean;
  showDescription: boolean;
  showActors: boolean;

  showRatio: boolean;
  showDirectors: boolean;
  showGenres: boolean;
  showLanguages: boolean;
  showMetacriticRating: boolean;
};

export type contextSettingsType = {
  settings: settingsType;
  setSettingsValue: (settingsKey: string) => void;
};

export const defaultSettingsState: contextSettingsType = {
  settings: {
    showTitle: true,
    showDescription: true,
    showActors: true,
    showRatio: true,
    showDirectors: true,
    showGenres: true,
    showLanguages: true,
    showMetacriticRating: true,
  },
  setSettingsValue() {},
};

export const SettingsContext = createContext(defaultSettingsState);
