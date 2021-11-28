import { useThemeContext } from "../../hooks/UseThemeContext";
import { ToogleThemeButton } from "../ToogleThemeButton";
import "../../styles/Nav.scss";
import { NavItem } from "./NavItem/NavItem";
import { ROUTES } from "../../constants/routes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export const Nav = (props: Props) => {
  const { dark } = useThemeContext();
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);

  useEffect(() => {
    function handleResize() {
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);

      if (window.innerWidth < 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsMobileNav(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNav(!isMobileNav);
  };

  return (
    <div>
      <div className="top__socials">
        <div>
          <div className="social__item">Facebook</div>
          <div className="social__item">LinkedIn</div>
          <div className="social__item">GitHub</div>
        </div>
      </div>
      <header
        className={`${dark ? "dark__theme" : "light__theme"} nav__wrapper`}
      >
        <nav>
          {!isMobile ? (
            <ul className="nav__list">
              <li>
                <NavItem path={ROUTES.START} text="Home" />
              </li>
              <li>
                <NavItem path={ROUTES.FILMS} text="Films" />
              </li>
              <li>
                <NavItem path={ROUTES.FAVOURITE} text="Favourite" />
              </li>
              <li>
                <NavItem path={ROUTES.SETTINGS} text="Settings" />
              </li>
            </ul>
          ) : (
            <div className="toggle_nav__button">
              <FontAwesomeIcon icon={faBars} onClick={toggleMobileNav} />
            </div>
          )}
        </nav>
        <ToogleThemeButton />
      </header>
      {isMobileNav ? (
        <div className="mobile_menu__wrapper">
          <div className="mobile_menu">
            <div className="toggle_mobile__button" onClick={toggleMobileNav}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <ul className="mobile_nav__list">
              <li>
                <NavItem
                  handleClick={toggleMobileNav}
                  path={ROUTES.START}
                  text="Home"
                />
              </li>
              <li>
                <NavItem
                  handleClick={toggleMobileNav}
                  path={ROUTES.FILMS}
                  text="Films"
                />
              </li>
              <li>
                <NavItem
                  handleClick={toggleMobileNav}
                  path={ROUTES.FAVOURITE}
                  text="Favourite"
                />
              </li>
              <li>
                <NavItem
                  handleClick={toggleMobileNav}
                  path={ROUTES.SETTINGS}
                  text="Settings"
                />
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};
