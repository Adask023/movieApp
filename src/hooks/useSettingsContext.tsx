import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export const useSettingsContext = () => useContext(SettingsContext);
