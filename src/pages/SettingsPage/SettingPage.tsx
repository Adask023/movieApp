import React from "react";
import { settingsConfigType } from "../../context/SettingsContext";
import { useSettingsContext } from "../../hooks/useSettingsContext";
import "../../styles/SettingsPage.scss";

export const SettingPage: React.FC = () => {
  const { settingsState, setSettingsValue } = useSettingsContext();

  console.log(settingsState);

  const handleSettingsChange = (e: React.MouseEvent<HTMLElement>) => {
    const key = e.target as HTMLButtonElement;
    setSettingsValue(key.value);
    console.log(key.value);
  };

  return (
    <div className="settings__page">
      <h1>SettingsPage</h1>

      <div className="content">
        <div className="section__header">
          <h3>Select variables to show on film page</h3>
        </div>

        <div className="settings__container">
          {settingsState.settings.map((item: settingsConfigType) => {
            return (
              <div className="settings__item">
                <button
                  key={item.settingName}
                  value={item.settingName}
                  onClick={(e) => handleSettingsChange(e)}
                  style={
                    item.settingValue
                      ? { opacity: "0.5" }
                      : { opacity: "1"}
                  }
                >
                  {item.settingName.toUpperCase()}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
