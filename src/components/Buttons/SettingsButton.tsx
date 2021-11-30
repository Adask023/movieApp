import React from "react";

interface Props {
  settingButtonName: string;
  value: string;
  isSettingActive: boolean;
  handleSettingsChange: (e: React.MouseEvent<HTMLElement>) => void;
}

export const SettingsButton = (props: Props) => {
  return (
    <div className="settings__item">
      <button
        value={props.value}
        onClick={(e) => props.handleSettingsChange(e)}
        style={props.isSettingActive ? { opacity: "0.5" } : { opacity: "1" }}
      >
        {props.settingButtonName}
      </button>
    </div>
  );
};
