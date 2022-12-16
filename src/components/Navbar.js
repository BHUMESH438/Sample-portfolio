import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark  fixed-top">
      <div className="container-fluid p-1">
        <a className="navbar-brand " href="#" style={{ color: "#17a2b8" }}>
          MyWebsite
        </a>
        <button className="btn-sm bg-light navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <div className="navbar-nav ms-auto">
            <Link smooth={true} to="home" className="nav-link text-white" aria-current="page" href="#">
              Home
            </Link>
            <Link smooth={true} to="about" className="nav-link text-white" offset={-110} href="#">
              About
            </Link>
            <Link smooth={true} to="skills" className="nav-link text-white" href="#">
              Skills
            </Link>
            <Link smooth={true} to="contacts" className="nav-link text-white ">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
