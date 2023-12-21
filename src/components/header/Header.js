import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo header__logo">
        nb
      </a>
      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link nav__link_active" href="/">
              главная страница
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">
              опыт
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
