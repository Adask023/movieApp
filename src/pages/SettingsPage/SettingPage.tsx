import React from "react";
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
          <div className="settings__item">
            <button value="showTitle" onClick={(e) => handleSettingsChange(e)}>
              Title
            </button>
          </div>
          {/* {settingsState.settings.map((item: settingsConfigType) => {
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
          })} */}
        </div>
      </div>
    </div>
  );
};
