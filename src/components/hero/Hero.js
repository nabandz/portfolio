import Socials from "../socials/Socials";

import linkIcon from "../../resources/images/icons/link.svg";
import downloadIcon from "../../resources/images/icons/download.svg";

import cv from "../../resources/CV.pdf";

import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="title">приветствую &#128075;</h1>
      <Socials />
      <div className="hero__info">
        <p className="description">
          Я — Бандзеладзе Наталья, Junior Frontend-разработчик из Москвы. В
          настоящее время активно ищу работу по специальности! Умею работать в
          команде, быстро обучаюсь, имею огромное желание развиваться в сфере
          Web-разработки.
        </p>
        <div className="hero__cv">
          <a href={cv} className="box box_light hero__link" download="CV">
            <img src={downloadIcon} alt="download icon" />
            Скачать CV
          </a>
          <a
            href="https://hh.ru/resume/89e6c5feff0c56aa890039ed1f497861547947"
            className="box hero__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkIcon} alt="link icon" />
            Резюме hh.ru
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
