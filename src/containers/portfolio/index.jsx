import React from "react";
import { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.scss";
import { filterData, portfolioData } from "./utils";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [hoverValue, setHover] = useState(null);
  const handleFilter = (categoryName) => {
    setFilter(categoryName);
  };
  const handleHover = (index) => {
    setHover(index);
  };
  console.log("================");
  console.log(filter);
  console.log("==================");

  const filterProjects =
    filter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerTitle="My Portfolio"
        icon={<i className="fa-solid fa-circle-info"></i>}
      />
      <div className="portfolio_content">
        <ul className="portfolio_content_select-category">
          {filterData.map((item) => {
            return (
              <li
                className={item.cat === filter ? "active" : ""}
                key={item["filter-id"]}
                onClick={() => handleFilter(item.cat)}
              >
                {item.cat}
              </li>
            );
          })}
        </ul>
        <div className="portfolio_content_cards">
          {filterProjects.map((item, index) => {
            return (
              <div
                className="portfolio_content_cards_item"
                key={item.id}
                onMouseMove={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio_content_cards_item_image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="overlay">
                  {index === hoverValue && (
                    <div>
                      <p>{item.name}</p>
                      <a href={item.link} target="_blank" rel="noreferrer">Visit</a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
