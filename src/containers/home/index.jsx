import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMe = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello , I'm Mahmoud Awad
          <br />
          Front End Developer
        </h1>
      </div>
      <Animate
        play
        delay={1}
        duration={1.5}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0)",
        }}
      >
        <div className="home_contact-me">
          <button onClick={handleNavigateToContactMe}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
