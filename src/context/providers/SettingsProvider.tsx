import React, { FC, useState } from "react";
import {
  defaultSettingsState,
  SettingsContext,
} from "../SettingsContext";

export const SettingsProvider: FC<{}> = ({ children }) => {
  const [settingsState, setSettingsState] = useState(defaultSettingsState);

  const setSettingsValue = (key: string) => {
    console.log(`context value ${key}`);
    const newSettingsValue = settingsState.settings.map((item) => {
      if (item.settingName === key)
        return { ...item, settingValue: !item.settingValue };
      return item;
    });
    setSettingsState({ settings: newSettingsValue });
  };

  return (
    <SettingsContext.Provider value={{ settingsState, setSettingsValue }}>
      {children}
    </SettingsContext.Provider>
  );
};
