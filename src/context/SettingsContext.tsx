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
  },
  {
    settingName: "example",
    settingValue: true,
  },
  {
    settingName: "example2",
    settingValue: true,
  },
  {
    settingName: "example3",
    settingValue: true,
  },
  {
    settingName: "example4",
    settingValue: true,
  },
  {
    settingName: "example5",
    settingValue: true,
  },
  {
    settingName: "example6",
    settingValue: true,
  }]
};

export const SettingsContext =
  createContext<any>(defaultSettingsState);
