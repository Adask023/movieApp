import React from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../hooks/UseThemeContext";
import { ToogleThemeButton } from "../ToogleThemeButton";

interface Props {}

export const Nav = (props: Props) => {
  const { dark } = useThemeContext();
  return (
    <div style={dark ? {backgroundColor: "gray"} : {backgroundColor: "lightgray"}}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/favourite">Favourite</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <ToogleThemeButton />
    </div>
  );
};
