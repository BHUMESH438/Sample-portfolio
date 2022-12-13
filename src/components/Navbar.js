import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark ">
      <div className="container-fluid p-2">
        <a className="navbar-brand " href="#" style={{ color: "#17a2b8" }}>
          MyWebsite
        </a>
        <button className="btn-sm bg-light navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <div className="navbar-nav ms-auto">
            <a className="nav-link text-white" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link text-white" href="#">
              About
            </a>
            <a className="nav-link text-white" href="#">
              Skills
            </a>
            <a className="nav-link text-white ">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
