import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerTitle="My Skills"
        icon={<i className="fa-solid fa-circle-info"></i>}
      />
    </section>
  );
};

export default Skills;
