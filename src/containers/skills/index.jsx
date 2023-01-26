import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import "./style.scss";
import { Animate } from "react-simple-animate";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerTitle="My Skills"
        icon={<i className="fa-solid fa-circle-info"></i>}
      />
      <div className="skills_tech-skills">
        {skillsData.map((skill, index) => {
          return (
            <div className="skills_tech-skills_category-skill" key={index}>
              <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                  transform: "translateX(-1400px)",
                }}
                end={{
                  transform: "translateX(0)",
                }}
              >
                <h3>{skill.label}</h3>
              </Animate>

              {skill.data.map((data, index) => {
                return (
                  <Animate
                    play
                    duration={1.5}
                    delay={2}
                    start={{
                      transform: "translateX(-1400px)",
                    }}
                    end={{
                      transform: "translateX(0)",
                    }}
                  >
                    <div
                      className="skills_tech-skills_category-skill_skill"
                      key={index}
                    >
                      <p>{data.skillName}</p>
                      <div className="percentage">
                        <span
                          style={{
                            width: `${data.percentage}%`,
                            display: "block",
                          }}
                        ></span>
                      </div>
                    </div>
                  </Animate>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
