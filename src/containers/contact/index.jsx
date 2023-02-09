import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.scss";
import { Animate } from "react-simple-animate";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerTitle="My Contact"
        icon={<i className="fa-solid fa-circle-info"></i>}
      />
      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0)",
          }}
        >
          <div className="contact_content_header-text">
            <h3>Let's Talk</h3>
          </div>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0.5}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0)",
          }}
        >
          <div className="contact_content_form">
            <div className="contact_content_form_control-wrapper">
              <div className="nameWrapper">
                <input required type="text" name="name" className="nameInput" />
                <label htmlFor="name" className="nameLabel">
                  Name{" "}
                </label>
              </div>
              <div className="mailWrapper">
                <input required type="text" name="mail" className="mailInput" />
                <label htmlFor="mail" className="mailLabel">
                  Email
                </label>
              </div>
              <div className="messageWrapper">
                <textarea
                  required
                  type="text"
                  name="message"
                  className="messageInput"
                />
                <label htmlFor="message" className="messageLabel">
                  Message
                </label>
              </div>
            </div>
            <button>submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
