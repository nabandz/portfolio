import SkillsList from "../SkillsList/SkillsList";

import currencyConverterImg from "../../resources/images/currency-converter.png";
import todoListImg from "../../resources/images/todo-list.png";
import knigaKitImg from "../../resources/images/kniga-kit.png";
import ujjoImg from "../../resources/images/ujjo.png";
import rickAndMortyImg from "../../resources/images/rick-and-morty.png";
import linkIcon from "../../resources/images/icons/link.svg";
import githubIcon from "../../resources/images/icons/github.svg";

import "./portfolio.scss";

const Portfolio = () => {
  const portfolioItems = [
    {
      img: rickAndMortyImg,
      skills: ["React", "JavaScript", "HTML", "styled components"],
      title: "Rick And Morty",
      descr: "Реализация приложения с Rick and Morty API.",
      demo: "https://nabandz.github.io/rick-and-morty/",
      github: "https://github.com/nabandz/rick-and-morty",
    },
    {
      img: todoListImg,
      skills: ["React", "JavaScript", "HTML", "SCSS"],
      title: "Список задач",
      descr: "Реализация приложения “Список задач”",
      demo: "https://nabandz.github.io/todo-list/",
      github: "https://github.com/nabandz/todo-list",
    },
    {
      img: currencyConverterImg,
      skills: ["React", "JavaScript", "HTML", "SCSS"],
      title: "Конвертер валют",
      descr: "Реализация приложения “Конвертер валют”",
      demo: "https://nabandz.github.io/currency-converter/",
      github: "https://github.com/nabandz/currency-converter",
    },
    {
      img: knigaKitImg,
      skills: ["JavaScript", "HTML", "SCSS"],
      title: "КнигаКит",
      descr: "Реализация лендинга для проекта “КнигаКит — детские сказки”",
      demo: "https://knigakit.com/",
      github: "https://github.com/nabandz/kniga-kit",
    },
    {
      img: ujjoImg,
      skills: ["JavaScript", "HTML", "SCSS"],
      title: "Ujjo",
      descr: "Реализация лендинга по макету “Ujjo”",
      demo: "https://nabandz.github.io/Ujjo/",
      github: "https://github.com/nabandz/ujjo",
    },
  ];

  const portfolioElements = portfolioItems.map((item) => {
    return (
      <div className="portfolio__item" key={`${item.title} key`}>
        <div className="portfolio__info">
          <div className="portfolio__img">
            <img src={item.img} alt={`${item.title}`} />
          </div>
          <SkillsList skills={item.skills} />
          <h3 className="title title_mini">{item.title}</h3>
          <p className="description">{item.descr}</p>
        </div>
        <div className="portfolio__links">
          <a
            href={item.demo}
            className="box box_light portfolio__demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkIcon} alt="link icon" />
            Демо
          </a>
          <a
            href={item.github}
            className="box portfolio__demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="github icon" />
            Исходный код
          </a>
        </div>
      </div>
    );
  });

  return (
    <section className="portfolio">
      <h2 className="title title_mini">портфолио</h2>
      <div className="portfolio__wrapper">{portfolioElements}</div>
    </section>
  );
};

export default Portfolio;
