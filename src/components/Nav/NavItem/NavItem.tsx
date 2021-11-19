import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  path: string;
  text: string;
}

export const NavItem = ({ path, text }: Props) => {
  return (
    <>
      <NavLink
        exact
        className={(isActive) => "nav-Link" + (!isActive ? " unselected" : "")}
        to={path}
      >
        {text}
      </NavLink>
    </>
  );
};
