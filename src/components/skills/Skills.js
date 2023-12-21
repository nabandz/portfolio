import SkillsList from "../skillsList/SkillsList";

import "./skills.scss";

const Skills = () => {
  const skills = ["React", "JavaScript", "HTML", "CSS/SCSS/SASS", "Git"];

  return (
    <section className="skills">
      <h2 className="title title_mini">навыки</h2>
      <SkillsList skills={skills} />
    </section>
  );
};

export default Skills;
