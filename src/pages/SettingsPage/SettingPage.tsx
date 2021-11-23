import React from "react";
import { settingsConfigType } from "../../context/SettingsContext";
import { useSettingsContext } from "../../hooks/useSettingsContext";

export const SettingPage: React.FC = () => {
  const { settingsState, setSettingsValue } = useSettingsContext();

  console.log(settingsState);

  const handleSettingsChange = (e: React.MouseEvent<HTMLElement>) => {
    const key = e.target as HTMLButtonElement;
    setSettingsValue(key.value);
    console.log(key.value);
  };

  return (
    <div>
      <h1>SettingsPage</h1>

      <div className="content" style={{ marginTop: "40px" }}>
        <h3>Select variables to show on film page</h3>
        {settingsState.settings.map((item: settingsConfigType) => {
          return (
            <button
              key={item.settingName}
              value={item.settingName}
              onClick={(e) => handleSettingsChange(e)}
              style={
                item.settingValue
                  ? { backgroundColor: "gray" }
                  : { backgroundColor: "lightgray" }
              }
            >
              {item.settingName}
            </button>
          );
        })}

        {/* <button
          value="title"
          onClick={(e) => 
            handleSettingsChange(e)
          }
        >
          Toogle title
        </button>
        <button>Toogle description</button> */}
      </div>
    </div>
  );
};
