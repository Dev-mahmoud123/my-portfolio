import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerTitle="My Portfolio"
        icon={<i className="fa-solid fa-circle-info"></i>}
      />
    </section>
  );
};

export default Portfolio;
