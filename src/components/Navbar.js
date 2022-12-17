import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    // here i used navbar-expand-sm so that the nav bar will be responsive upto 576px
    <nav className="navbar navbar-expand-sm bg-dark  fixed-top">
      <div className="container-fluid ">
        <a className="navbar-brand " href="#" style={{ color: "#17a2b8" }}>
          Portfolio
        </a>
        {/* here i used button class for toggle */}
        <button className="btn btn-sm bg-light navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mainMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* here i used offcanvas class so it will be responsive after sm */}
        <div className="offcanvas offcanvas-bottom text-bg-dark" tabIndex={"-1"} id="mainMenu" data-bs-scroll="true" data-bs-backdrop="true">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{ color: "#17a2b8" }}>
              Portfolio
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="navbar-nav ms-auto">
              {/* here i used link for auto scroll */}
              <Link smooth={true} to="home" className="nav-link text-white" offset={-110} aria-current="page" href="#">
                Home
              </Link>
              <Link smooth={true} to="about" className="nav-link text-white" href="#">
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
      </div>
    </nav>
  );
};
