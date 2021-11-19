import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeContext } from "../hooks/UseThemeContext";

export const ToogleThemeButton = () => {
  const { dark, toggleDark } = useThemeContext();
  return (
    <>
      <div className="toogle__button" onClick={toggleDark}>
        {dark ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </div>
    </>
  );
};
