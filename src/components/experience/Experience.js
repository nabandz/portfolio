import "./experience.scss";

const Experience = () => {
  return (
    <section className="experience">
      <h1 className="title">мой опыт</h1>
      <p className="description">
        В настоящее время принимаю участие в ралзичных проектах с энтузиастами,
        где практикую свои навыки по фронтенд разработке. Самостоятельно
        реализую пет-проекты, которые размещаю на своем GitHub.
      </p>
      <hr className="hr" />
      <div className="experience__wrapper">
        <div className="experience__item">
          <h2 className="title title_xl">КнигаКит — детские сказки</h2>
          <p className="description description_mini experience__description">
            Junior Frontend Developer, 2022 — настоящее время
          </p>
          <div className="experience__text">
            <p>
              Проект "КнигаКит" - это приложение увлекательных историй и
              развивающих игр для детей. Полезные аудиосказки для детей
              развивают эмоциональный интеллект, социальные навыки, волевую
              сферу. Обучающие игры тренируют мелкую моторику, внимание, память
              и пространственное мышление.
            </p>
            <p>
              Все участиники проекта работают на энтузиазме. В мои обязанности
              входит обновление контента для сайта, реализация нового
              функционала, его оптимизация и поддержка.
            </p>
            <ul>
              <li>Верстка сайта по дизайн макету.</li>
              <li>
                Реализация визуального и интерактивного функционала на{" "}
                <span>JavaScript</span>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
