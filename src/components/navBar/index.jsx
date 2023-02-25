import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import logo from '../../images/mahmoud-awad.png'

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Skills",
    to: "/skills",
  },
  {
    label: "Resume",
    to: "/resume",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export const NavBar = () => {
  const [isToggled, setToggling] = useState(false);

  const handleToggle = () => {
    setToggling(!isToggled);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={"/"} className="navbar_container_logo">
          <img src={logo} alt="Logo"/>
          </Link>
        </div>
        <ul className={`navbar_container_menu ${isToggled ? "active" : ""}`}>
          {data.map((link, key) => {
            return (
              <li className="navbar_container_menu_items" key={key}>
                <Link
                  className="navbar_container_menu_items_links"
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="navbar_icons">
          {
            <button onClick={handleToggle}>
              {isToggled ? (
                <i className="fa-regular fa-circle-xmark"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </button>
          }
        </div>
      </nav>
    </div>
  );
};
