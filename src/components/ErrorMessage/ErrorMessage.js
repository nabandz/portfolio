import { Link } from "react-router-dom";

import icon404 from "../../resources/images/404.gif";
import homeIcon from "../../resources/images/icons/home.svg";

import "./errorMessage.scss";

const errorMessage = () => {
  return (
    <section className="error-meassage">
      <h1 className="title">404</h1>
      <div className="description">
        Похоже, такой страницы не существует . . .
      </div>
      <img src={icon404} alt="404" className="error-meassage__img" />
      <Link to="/" className="box">
        <img src={homeIcon} alt="home icon" />
        Вернуться на главную страницу
      </Link>
    </section>
  );
};

export default errorMessage;
