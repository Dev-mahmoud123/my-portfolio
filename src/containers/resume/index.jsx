import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerTitle="My Resume"
        icon={<i className="fa-solid fa-circle-info"></i>}
      />
    </section>
  );
};

export default Resume;
