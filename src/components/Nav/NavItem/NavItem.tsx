import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  path: string;
  text: string;
  handleClick?: () => void;
}

export const NavItem = ({ path, text, handleClick }: Props) => {
  return (
    <>
      <NavLink
        exact
        onClick={handleClick ? handleClick : undefined}
        className={(isActive) => "nav-Link" + (!isActive ? " unselected" : "")}
        to={path}
      >
        {text}
      </NavLink>
    </>
  );
};
