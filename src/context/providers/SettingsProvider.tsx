import { FC, useState } from "react";
import {
  defaultSettingsState,
  SettingsContext,
  settingsType,
} from "../SettingsContext";

export const SettingsProvider: FC<{}> = ({ children }) => {
  const [settings, setSettings] =
    useState<settingsType>(defaultSettingsState.settings);


  const setSettingsValue = (key: string) => {
    console.log(`context value ${key}`);

    // const prevState = settings[key]

    // console.log(prevState)

    // NOT WORKING 
    // setSettings((settings) => ({
    //   ...settings,
    //   [key]: !settings[key],
    // }));

    // switch (key) {
    //   case "title":
    //     const prevState = settingsState.settings.showTitle;
    //     setSettingsState({
    //       settings: {
    //         ...settingsState.settings,
    //         showTitle: !settingsState.settings.showTitle,
    //       },
    //     });
    // }
    // const newSettingsValue = settingsState.settings.map((item) => {
    //   if (item.settingName === key)
    //     return { ...item, settingValue: !item.settingValue };
    //   return item;
    // });
    // setSettingsState({ settings: newSettingsValue });
  };

  return (
    <SettingsContext.Provider value={{ settings, setSettingsValue }}>
      {children}
    </SettingsContext.Provider>
  );
};
