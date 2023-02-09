import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.scss";
import { Animate } from "react-simple-animate";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ruzs60a",
        "template_j7b9udd",
        form.current,
        "SfYVniDmq2_I_ZcAk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact_content_form_control-wrapper"
            >
              <div className="nameWrapper">
                <input
                  required
                  type="text"
                  name="user_name"
                  className="nameInput"
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div className="mailWrapper">
                <input
                  required
                  type="email"
                  name="user_email"
                  className="mailInput"
                />
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
              <input type="submit" className="btn-submit" value="send" />
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
