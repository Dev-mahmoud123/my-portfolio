import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.scss";
import { Animate } from "react-simple-animate";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerTitle="About Me"
        icon={<i className="fa-solid fa-circle-info"></i>}
      />
      <div className="about_content">
        <div className="about_content_info">
          <Animate
            duration={1}
            delay={0.5}
            play
            start={{
              transform: "translateX(-550px)",
            }}
            end={{
              transform: "translateX(0)",
            }}
          >
            <div className="about_content_info_bio">
              <h3>Front End Developer</h3>
              <p>
                Passionate junior front-end developer with a desire to learn and
                grow in a collaborative team environment. Skilled in HTML, CSS,
                and JavaScript. Excels at creating pixel-perfect designs and
                working with cross-browser compatibility issues.I have a good
                background in creating responsive and reactive websites run on
                multiple screens . I can work Independently and respect a
                deadline. I feel comfortable working with a good team of
                developers. I am passionate about the web marketing and have
                knowledge about .
              </p>
            </div>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0.8}
            start={{
              transform: "translateX(-550px)",
            }}
            end={{
              transform: "translateX(0)",
            }}
          >
            <div className="about_content_info_personal-info">
              <h3>Personal Information</h3>
              <ul className="about_content_info_personal-info_info-list">
                <li>
                  <span>Name </span> Mahmoud Awad
                </li>
                <li>
                  <span>Age </span> 26
                </li>
                <li>
                  <span>Address </span> Cairo , Egypt
                </li>
                <li>
                  <span>Email </span> mah.awad996@gmail.com
                </li>
                <li>
                  <span>Contact No </span>+20 1150198689
                </li>
              </ul>
            </div>
          </Animate>
        </div>
        <div className="about_content_services">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about_content_services_inner-content">
              <i className="fa-brands fa-dev"></i>
              <i className="fa-brands fa-react"></i>
              <i className="fa-brands fa-android"></i>
              <i className="fa-solid fa-database"></i>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
