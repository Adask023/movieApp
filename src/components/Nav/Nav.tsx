import { useThemeContext } from "../../hooks/UseThemeContext";
import { ToogleThemeButton } from "../ToogleThemeButton";
import "../../styles/Nav.scss";
import { NavItem } from "./NavItem/NavItem";
import { ROUTES } from "../../constants/routes";

interface Props {}

export const Nav = (props: Props) => {
  const { dark } = useThemeContext();
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
        </nav>
        <ToogleThemeButton />
      </header>
    </div>
  );
};
