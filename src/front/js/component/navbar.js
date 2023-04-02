import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { LoginForm } from "./loginForm";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary d-flex">
      <div className="container-fluid">
        <div className="mr-auto p-2 pink-brand">
          <a className="navbar-brand pink-brand" href="#">
            JWT Authentication
          </a>
        </div>

        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul> */}

            <LoginForm />

            {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
