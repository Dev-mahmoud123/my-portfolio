import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { resumeData } from "./utils";
import "./style.scss"

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerTitle="My Resume"
        icon={<i className="fa-brands fa-black-tie"></i>}
      />
      <div className="timeline">
        <div className="timeline_education">
          <h3 className="timeline_education_header-text">Education</h3>     
            {resumeData.education.map((item) => {
              return (
                <div className="timeline_education_content">
                  <h4>{item.title}</h4>
                  <p>{item.date}</p>
                  <p>{item.description}</p>
                </div>
              );
            })}
        </div>
        <div className="timeline_experience">
          <h3 className="timeline_experience_header-text">Experience</h3>
          {resumeData.experience.map((item) => {
            return (
              <div className="timeline_experience_content">
                <h4>{item.title}</h4>
                <p>{item.date}</p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
