import { FC, useState } from "react";
import {
  defaultSettingsState,
  SettingsContext,
  settingsType,
} from "../SettingsContext";

export const SettingsProvider: FC<{}> = ({ children }) => {
  const [settings, setSettings] = useState<settingsType>(
    defaultSettingsState.settings
  );

  const setSettingsValue = (settingsKey: string) => {
    console.log(`context value ${settingsKey}`);

    const settingsToSave = {
      ...settings,
      [settingsKey]: !settings[settingsKey],
    };
    setSettings(settingsToSave);
    localStorage.setItem("settingsConfig", JSON.stringify(settingsToSave));
  };

  return (
    <SettingsContext.Provider value={{ settings, setSettingsValue }}>
      {children}
    </SettingsContext.Provider>
  );
};
