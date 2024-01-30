import { NavLink, Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo header__logo">
        nb
      </Link>
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              className={({ isActive }) =>
                "nav__link " + (isActive ? "nav__link_active" : "")
              }
              end
              to="/"
            >
              главная страница
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={({ isActive }) =>
                "nav__link " + (isActive ? "nav__link_active" : "")
              }
              to="/experience"
            >
              опыт
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
