import { createContext } from "react";

export type settingsType = {
  [key: string]: any;
  showTitle: boolean;
  showDescription: boolean;
  showActors: boolean;
};

export type contextSettingsType = {
  settings: settingsType;
  setSettingsValue: (settingsKey: string) => void;
};

export const defaultSettingsState: contextSettingsType = {
  settings: {
    showTitle: true,
    showDescription: true,
    showActors: false,
  },
  setSettingsValue() {},
};

export const SettingsContext = createContext(defaultSettingsState);
