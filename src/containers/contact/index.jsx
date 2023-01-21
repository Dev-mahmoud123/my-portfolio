import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerTitle="My Contact"
        icon={<i className="fa-solid fa-circle-info"></i>}
      />
    </section>
  );
};

export default Contact;
