import React from "react";
import logo from "../img/logo.png";
//Import React scroll from the website https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// Improt React FontAwesome from website https://www.npmjs.com/package/@fortawesome/react-fontawesome and
// import instruction from https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div
          className="collapse navbar-collapse float"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link smooth={true} to="aboutMe" className="nav-Link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="projects" className="nav-Link" href="#">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contacts" className="nav-Link" href="#">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
