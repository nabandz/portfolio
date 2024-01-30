import reactIcon from "../../resources/images/icons/react.svg";
import jsIcon from "../../resources/images/icons/js.svg";
import htmlIcon from "../../resources/images/icons/html.svg";
import cssIcon from "../../resources/images/icons/css.svg";
import styledComponentsIcon from "../../resources/images/icons/styled-components.svg";
import gitIcon from "../../resources/images/icons/git.svg";

import "./skillsList.scss";

const SkillsList = (props) => {
  const { skills } = props;

  const skillsInfo = [
    {
      name: "React",
      icon: reactIcon,
    },
    {
      name: "JavaScript",
      icon: jsIcon,
    },
    {
      name: "HTML",
      icon: htmlIcon,
    },
    {
      name: "CSS/SCSS/SASS",
      icon: cssIcon,
    },
    {
      name: "styled components",
      icon: styledComponentsIcon,
    },
    {
      name: "SCSS",
      icon: cssIcon,
    },
    {
      name: "SASS",
      icon: cssIcon,
    },
    {
      name: "Git",
      icon: gitIcon,
    },
  ];

  const filterSkills = () => {
    const arr = skillsInfo.filter((e) => skills.indexOf(e.name) !== -1);

    return arr;
  };

  const skillsElements = filterSkills().map((item) => {
    return (
      <div className="box skills__item" key={`${item.name} key`}>
        <img src={item.icon} alt={`${item.name} icon`} />
        {item.name}
      </div>
    );
  });

  return <div className="skills-list">{skillsElements}</div>;
};

export default SkillsList;
