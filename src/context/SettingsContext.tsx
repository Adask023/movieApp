import { createContext } from "react";

export interface ISettingsContext {
  settings: settingsConfigType[];
  setSettingsValue?: (key: string) => void;
}

export type settingsConfigType = {
  settingName: string;
  settingValue: boolean;
};

export const defaultSettingsState = {
  settings: [{
    settingName: "title",
    settingValue: true,
  },{
    settingName: "description",
    settingValue: true,
  },
  {
    settingName: "actors",
    settingValue: true,
  }],
};

export const SettingsContext =
  createContext<any>(defaultSettingsState);
