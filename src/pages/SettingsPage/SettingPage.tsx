import React from "react";
import { SettingsButton } from "../../components/Buttons/SettingsButton";
import { useSettingsContext } from "../../hooks/useSettingsContext";
import "../../styles/SettingsPage.scss";

export const SettingPage: React.FC = () => {
  const { settings, setSettingsValue } = useSettingsContext();

  console.log(settings);

  const handleSettingsChange = (e: React.MouseEvent<HTMLElement>) => {
    const key = e.target as HTMLButtonElement;
    setSettingsValue(key.value);
    console.log(key.value);
  };

  console.log(settings);
  console.log(settings.showTitle);

  return (
    <div className="settings__page">
      <h1>SettingsPage</h1>
      <div className="content">
        <div className="section__header">
          <h3>Select variables to show on film page</h3>
        </div>
        <div className="settings__container">
          <SettingsButton
            settingButtonName="Title"
            value="showTitle"
            isSettingActive={settings.showTitle}
            handleSettingsChange={handleSettingsChange}
          />
          <SettingsButton
            settingButtonName="Description"
            value="showDescription"
            isSettingActive={settings.showDescription}
            handleSettingsChange={handleSettingsChange}
          />
          <SettingsButton
            settingButtonName="Actors"
            value="showActors"
            isSettingActive={settings.showActors}
            handleSettingsChange={handleSettingsChange}
          />
        </div>
      </div>
    </div>
  );
};
