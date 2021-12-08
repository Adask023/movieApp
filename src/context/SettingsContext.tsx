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

export let defaultSettingsState: contextSettingsType = {
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

const value = localStorage.getItem("settingsConfig");

if (value) {
  try {
    const loadSettingsState = JSON.parse(value);
    defaultSettingsState.settings = loadSettingsState;
  } catch (e) {
    console.log(`Local storage error: ${e}`);
  }
}

export const SettingsContext = createContext(defaultSettingsState);
