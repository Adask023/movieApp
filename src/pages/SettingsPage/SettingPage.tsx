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
          <h3>Select informations to show on movie page</h3>
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

          <SettingsButton
            settingButtonName="Content Rating"
            value="showRatio"
            isSettingActive={settings.showRatio}
            handleSettingsChange={handleSettingsChange}
          />
          <SettingsButton
            settingButtonName="Directors"
            value="showDirectors"
            isSettingActive={settings.showDirectors}
            handleSettingsChange={handleSettingsChange}
          />
          <SettingsButton
            settingButtonName="Genres"
            value="showGenres"
            isSettingActive={settings.showGenres}
            handleSettingsChange={handleSettingsChange}
          />
          <SettingsButton
            settingButtonName="Languages"
            value="showLanguages"
            isSettingActive={settings.showLanguages}
            handleSettingsChange={handleSettingsChange}
          />
          <SettingsButton
            settingButtonName="Metacritic Rating"
            value="showMetacriticRating"
            isSettingActive={settings.showMetacriticRating}
            handleSettingsChange={handleSettingsChange}
          />
        </div>
      </div>
    </div>
  );
};
