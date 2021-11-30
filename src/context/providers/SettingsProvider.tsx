import { FC, useState } from "react";
import {
  defaultSettingsState,
  SettingsContext,
  settingsType,
} from "../SettingsContext";

export const SettingsProvider: FC<{}> = ({ children }) => {
  const [settings, setSettings] =
    useState<settingsType>(defaultSettingsState.settings);

  const setSettingsValue = (settingsKey: string) => {
    console.log(`context value ${settingsKey}`);

    setSettings((settings) => ({
      ...settings,
      [settingsKey]: !settings[settingsKey],
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, setSettingsValue }}>
      {children}
    </SettingsContext.Provider>
  );
};
